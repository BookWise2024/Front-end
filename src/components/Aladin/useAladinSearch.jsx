import { useState } from 'react';
import axios from 'axios';

const useAladinSearch = () => {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const ttbKeys = [
    'ttbksy6543331541001',
    'ttblouisp02151514001',
    'ttbsunny1004870933001',
    'ttbemfprhs15791659001',
    'ttblucy9910102202001'
  ];

  const searchBooks = async (query) => {
    setIsLoading(true);
    setError(null);
    setBooks([]);

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

        if (response.data && Array.isArray(response.data.item)) {
          setBooks(response.data.item);
          break;
        } else {
          setError('검색 결과가 없거나 올바르지 않은 응답 형식입니다.');
        }
      } catch (error) {
        console.error(`Error fetching books with key ${ttbKey}:`, error);
        setError(`도서 검색 중 오류가 발생했습니다. TTBKey: ${ttbKey}`);
      }
    }

    setIsLoading(false);
  };

  return { books, isLoading, error, searchBooks };
};

export default useAladinSearch;