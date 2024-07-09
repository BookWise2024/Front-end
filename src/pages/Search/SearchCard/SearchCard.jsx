import React, {useEffect} from 'react';
import style from "./SearchCard.module.css";
import Layout from "../../../Common/Layout/Layout.jsx";
import SearchHeader from "../../../Common/SearchHeader/SearchHeader.jsx";
import BookSearchList from "../../../Common/Book/BookSearchList.jsx";
import useAladinSearch from '../../../API/Aladin/useAladinSearch.jsx';

const SearchCard = () => {
  const { books, isLoading, error, query, searchBooks } = useAladinSearch();
const handleSearch = (searchQuery) => {
    searchBooks(searchQuery);
};

useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const searchQuery = params.get('search');
    console.log(searchQuery);
    if (searchQuery && searchQuery !== query) {
        searchBooks(searchQuery);
    }
}, [query, searchBooks]);
  return (
    <Layout>
      <SearchHeader onSearch={searchBooks} />
      <div className={style.CardWrapper}>
        <div className={style.CardContainer}>
          {isLoading && <p>검색 중...</p>}
          {error && <p style={{ color: 'red' }}>{error}</p>}
          {!isLoading && books.length > 0 && (
            books.map((book, index) => (
              <BookSearchList key={book.isbn13} book={book} index={index} />
            ))
          )}
          {!isLoading && books.length === 0 && !error && (
            <p className={style.noResults}>
              &apos;<span className={style.queryText}>{query}</span>&apos; 검색 결과를 찾을 수 없어요
            </p>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default SearchCard;
