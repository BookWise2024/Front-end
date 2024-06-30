// eslint-disable-next-line no-unused-vars
import style from "./SearchCard.module.css";
import Layout from "../../Common/Layout/Layout.jsx";
import SearchHeader from "../../Common/Header/SearchHeader.jsx";
// import DropdownMenu from "../../components/DropdownMenu.jsx";
// import AppStyle from "../../App.module.css";
import SearchResult from "../Search/SearchResult.jsx";

import BookSearchList from "../../Common/Book/BookSearchList.jsx";

const SearchCard = () => {

  const searchTerm = '해리포터';
  // 예시 검색어, 실제로는 검색어를 동적으로 받아와야 함.
  return (
    <Layout>
      <SearchHeader />
      <SearchResult searchTerm={searchTerm} /> 
      {/* 가운데 쏠림현상, gap설정 해야함. */}
      <div className={style.CardContainer}>
        <BookSearchList />
        <BookSearchList />
        <BookSearchList />
        <BookSearchList />
        <BookSearchList />
        <BookSearchList />
        <BookSearchList />
        <BookSearchList />
        <BookSearchList />
        <BookSearchList />
        <BookSearchList />
        <BookSearchList />
      </div>
    </Layout>
  );
};

export default SearchCard;
