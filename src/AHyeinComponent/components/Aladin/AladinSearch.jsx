// TTBKey: import.meta.env.ALADIN_API,
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import axios from 'axios';

function AladinSearch() {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchBooks = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.get('/api/ItemSearch.aspx', {
        params: {
          TTBKey: 'ttbsunny1004870933001', // 환경 변수 이름 수정
          Query: query,
          QueryType: 'Keyword',
          MaxResults: 10,
          start: 1,
          SearchTarget: 'Book',
          output: 'js',
          Version: '20131101',
          cover : 'Big',
        }
      });

      console.log('API response:', response.data); // 디버깅용

      if (response.data && Array.isArray(response.data.item)) {
        setBooks(response.data.item);
      } else {
        setBooks([]);
        setError('검색 결과가 없거나 올바르지 않은 응답 형식입니다.');
      }
    } catch (error) {
      console.error('Error fetching books:', error);
      setError('도서 검색 중 오류가 발생했습니다. 다시 시도해 주세요.');
      setBooks([]);
    } finally {
      setIsLoading(false);
    }
  };

  // console.log('API Key:', import.meta.env.ALADIN_API);

  return (
    <div>
      
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="책 제목을 입력하세요"
      />
      <button onClick={searchBooks} disabled={isLoading}>
        {isLoading ? '검색 중...' : '검색'}
      </button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {!isLoading && books.length > 0 && (
        <ul>
          {books.map((book) => (
            <li key={book.isbn}>{book.title} - {book.author} - {book.cover}</li>
          ))}
        </ul>
      )}

      {!isLoading && books.length === 0 && !error && (
        <p>검색 결과가 없습니다.</p>
      )}
    </div>
  );
}

export default AladinSearch;