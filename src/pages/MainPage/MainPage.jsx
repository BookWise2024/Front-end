import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import mainStyle from './MainPage.module.css';
import AppStyle from "../../App.module.css";
import SearchHeader from "../../Common/SearchHeader/SearchHeader.jsx";
import MainBookList from './BookList/MainBookList.jsx';
import SubBookList from './BookList/SubBookList.jsx';
import ThirdBookList from './BookList/ThirdBookList.jsx';
import FourthBookList from './BookList/FourthBookList.jsx';
import AgeBookList from './BookList/AgeBookList.jsx';
import Layout from '../../Common/Layout/Layout.jsx';
import axios from "axios";

export default function MainPage() {

  const jungbonaru_api = "e72fa97321d82cb19f04f9c3ecc9721a344b2bdc5ecb8f84b79adec8046e4116";
  const best_take_out_url = "http://data4library.kr/api/loanItemSrch?authKey=" + jungbonaru_api + '&format=json';
  const navigate = useNavigate();

  const handleSearch = (searchTerm) => {
    navigate(`/search?query=${searchTerm}`);
  };

  // 로그인 여부 확인
  const [user, setUser] = useState(null);

  useEffect(() => {
    const login_check = async() => {
      const token = localStorage.getItem('accessToken');
      console.log(token);
      if (token) {
        try {
          const response = await axios.get('http://43.203.74.198:8000/api/user/profile', {
            // headers: { 'Authorization': `Bearer ${token}` },
            headers: { 'Authorization': `${token}` },
          });
          console.log(response.data);
          setUser(response.data);
        } catch (error) {
          console.error('Error fetching user info', error);
        }
      }
    };

    login_check();
  }, []);

  return (
    <Layout>
      <SearchHeader onSearch={handleSearch} />
      <div className={mainStyle.layout}>
        <div className={mainStyle.container}>
          <MainBookList jungbonaru_url={best_take_out_url} user = { user } />
          <SubBookList jungbonaru_url={best_take_out_url} user = { user }  />
          <ThirdBookList jungbonaru_url={best_take_out_url} user = { user }  />
          <FourthBookList jungbonaru_url={best_take_out_url} user = { user }  />
          {/*<AgeBookList jungbonaru_url={best_take_out_url} />*/}
        </div>
      </div>
    </Layout>
  );
}