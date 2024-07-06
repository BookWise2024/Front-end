import { useState } from 'react';
import axios from 'axios';

const useAladinSearch = () => {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState('');

  const ttbKeys = [
    'ttbksy6543331541001', // 서영
    'ttblouisp02151514001', // 동휘
    'ttbsunny1004870933001', // 혜인
    'ttbemfprhs15791659001', // 동범
    'ttblucy9910102202001'  // 지원
  ];

  const searchBooks = async (query) => {
    setIsLoading(true);
    setError(null);
    setBooks([]);
    setQuery(query);

    for (let i = 0; i < ttbKeys.length; i++) {
      const ttbKey = ttbKeys[i];
      try {
        const response = await axios.get('/api/ItemSearch.aspx', {
          params: {
            TTBKey: ttbKey,
            Query: query,
            QueryType: 'Keyword',
            MaxResults: 10,
            start: 1,
            SearchTarget: 'Book',
            output: 'js',
            Version: '20131101',
            cover: 'Big',
          }
        });

        console.log('API response:', response.data); // 디버깅용

        if (response.data && Array.isArray(response.data.item)) {
          setBooks(response.data.item);
          setError(null);
          break; // 성공적으로 데이터를 가져왔으므로 루프 종료
        }
        // else {
        //   console.error('검색 결과가 없거나 올바르지 않은 응답 형식입니다.');
        // }
      } catch (error) {
        console.error(`Error fetching books with key ${ttbKey}:`, error);
        console.error(`도서 검색 중 오류가 발생했습니다. TTBKey: ${ttbKey}`);
      }
    }

    setIsLoading(false);
  };

  return { books, isLoading, error, query, searchBooks };
};

export default useAladinSearch;
