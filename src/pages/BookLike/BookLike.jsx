import React, { useEffect, useState } from "react";
import {useNavigate, useNavigation} from 'react-router-dom';
import axios from 'axios';

import HomeHeader from '../../Common/SearchHeader/Header/HomeHeader.jsx';
import styles from './BookLike.module.css';
import Layout from '../../Common/Layout/Layout.jsx';

const books = [
  { title: '해리포터와 마법사의 돌', img: 'src/assets/img/book/book2.png' },
  { title: '해리포터와 비밀의 방', img: 'src/assets/img/book/book2.png' },
  { title: '해리포터와 아즈카반의 죄수', img: 'src/assets/img/book/book3.png' },
  { title: '해리포터와 불의 잔', img: 'src/assets/img/book/book4.png' }
];

const BookLike = () => {

  const navigate = useNavigate();
  // login token
  const token = localStorage.getItem('accessToken');
  const [user, setUser] = useState(null);
  // 선호책 리스트
  const [prefer, setPrefer] = useState(null);

  // 로그인 여부 확인
  useEffect(() => {
    const login_check = async() => {
      if (token) {
        try {
          const response = await axios.get('http://43.203.74.198:8000/api/user', {
            headers: {
              'Authorization': `Bearer ${token}`,
            },
          });
          console.log(response.data);

          setUser(response.data);
        } catch (error) {
          console.error('Error fetching user info', error);
        }
      }
    }

    // 사용자 선호책 리스트
    const preferList = async() => {
      try {
        const res = await axios.get('http://43.203.74.198:8000/api/wishlist', {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
        console.log(res.data);

        setPrefer(res.data);
      } catch (error) {
          console.error('Error fetching user info', error);
      }
    }

    // login_check();
    // preferList();
  }, []);

  // // user 값이 잘 set 되었는지 확인하기
  // if (!user) {
  //     return <div>User information not found.</div>;
  // }
  // console.log(user);
  // if(user == null) {
  //   alert("로그인이 필요합니다.");
  //   window.location.href = "http://localhost:5173/login";
  // }


  return (
    // <Layout>
    //   <div className={styles.bookListContainer}>
    //     <HomeHeader />
    //     <div className={styles.bookListContent}>
    //       <div className={styles.bookListHeader}>
    //         <div className={styles.title}>선호책 리스트</div>
    //         <div className={styles.totalCount}>총 {prefer.count} 건</div>
    //       </div>
    //       <div className={styles.bookList}>
    //         {prefer.bookList.map((book, index) => (
    //           <div className={styles.bookItem} key={index}>
    //             <img className={styles.bookImage} src={ book.coverUrl } />
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //   </div>
    // </Layout>
      <Layout>
        <div className={styles.bookListContainer}>
          <HomeHeader />
          <div className={styles.bookListContent}>
            <div className={styles.bookListHeader}>
              <div className={styles.title}>선호책 리스트</div>
              <div className={styles.totalCount}>총 {books.length} 건</div>
            </div>
            <div className={styles.bookList}>
              {books.map((book, index) => (
                  <div className={styles.bookItem} key={index}>
                    <img className={styles.bookImage} src={ book.img } />
                  </div>
              ))}
            </div>
          </div>
        </div>
      </Layout>
  );
}

export default BookLike;