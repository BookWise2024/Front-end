import React from 'react';
import { useNavigate } from 'react-router-dom';
import layout from '../../Common/TestLayout.module.css';
import mainStyle from './MainPage.module.css';
import AppStyle from "../../App.module.css";
import SearchHeader from "../../Common/SearchHeader/SearchHeader.jsx";
import MainBookList from './BookList/MainBookList.jsx';
import SubBookList from './BookList/SubBookList.jsx';
import AgeBookList from './BookList/AgeBookList.jsx';
import Layout from '../../Common/Layout/Layout.jsx';

export default function MainPage() {
  const jungbonaru_api = "e72fa97321d82cb19f04f9c3ecc9721a344b2bdc5ecb8f84b79adec8046e4116";
  const best_take_out_url = "http://data4library.kr/api/loanItemSrch?authKey=" + jungbonaru_api + '&format=json';
  const navigate = useNavigate();

  const handleSearch = (searchTerm) => {
    navigate(`/search?query=${searchTerm}`);
  };

  return (
    <Layout>
      <SearchHeader onSearch={handleSearch} />
      <div className={mainStyle.layout}>
        <div className={mainStyle.container}>
          <MainBookList jungbonaru_url={best_take_out_url} />
          <SubBookList jungbonaru_url={best_take_out_url} />
          <AgeBookList jungbonaru_url={best_take_out_url} />
        </div>
      </div>
    </Layout>
  );
}
