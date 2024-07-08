import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

// ------------------------------------------------------
import mainStyle from '../MainPage.module.css';
import AppStyle from "../../../App.module.css";
//-------------------------------------------------------
// import WidthScroll from "./WidthScroll.jsx";

export default function FourthBookList({ jungbonaru_url }) {

    const navigate = useNavigate();
    // const baseUrl = "http://localhost:8080";

    const [thdList, setThdList] = useState([]);
    const seniorElements = [];
    const age = {name : '장년 추천 도서', from_age : '40', to_age : '100'};

    // 추천 책 리스트
    const [list, setList] = useState([]);
    const [user, setUser] = useState(null);
    // 최상단 추천 리스트
    const bookList = [];
    const bookElements = [];

    // 책 상세페이지로 이동
    function BookDetail(isbn) {
        navigate("/SearchDetail?bookId=" + isbn);
    }
                
    useEffect(() => {
        // 로그인 여부 확인
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

        // 사용자 추천 책 리스트 요청
        const userRecommend = async() => {
            try{
                const token = localStorage.getItem('accessToken');
                const res = await axios.get("http://43.203.74.198:8000/recommendations",
                    {headers: { 'Authorization': `${token}` },
                });

                const recomend = res.data.categoryTwo;
                console.log(recomend);
                setList(recomend);
            } catch(e) {
                console.log(e);
            }
        };

        // 연령대별 추천 책 리스트 요청(반복문 필요)
        const SeniorRecomend = async() => {
            try{
                const res = await axios.get(jungbonaru_url +
                    '&from_age=' + age.from_age + '&to_age=' + age.to_age);

                const jsonData = res.data;
                console.log(jsonData);
                console.log(jsonData.response.docs);
                // data 순서 -> response/docs[i]/doc/...
                const bookList = jsonData.response.docs.slice(0, 10).map(book => book.doc.bookImageURL);

                setThdList(bookList);
            } catch(e) {
                console.log(e);
            }
        }
        
        login_check();
        if(user) {
            userRecommend();
        } else if(!user) {
            SeniorRecomend();
        }
    },[]);
    // ---------------------------------------------------------------------------
    // 로그인 여부에 따른 상단의 추천 도서 종류 변경
    if(user) {
        // 사용자 추천 책 top 10
        for(let i = 0; i < 10; i++) {
            bookElements.push(
                <>
                    <img
                        style={{ width: "10.1875rem", height: "14.0625rem", borderRadius: "0.25rem" }}
                        src={ list[i].coverURL }
                        onClick={ () => BookDetail(list[i].isbn13) } />
                </>
            )
        }
        bookList.push(
            <>
                <div className={AppStyle.subtitle2}>
                    categoryTwo 맞춤 추천
                </div>
                <div className={mainStyle.list_container}>
                    { bookElements }
                </div>
            </>
        );
    } else if(!user) {
        // 추천 책 top 10
        for(let i = 0; i < 10; i++){
            seniorElements.push(
                <>
                    <img
                        key={i}
                        style={{ width: "6.1875rem", height: "8.875rem", borderRadius: "0.25rem" }}
                        src={thdList[i]}
                    />
                </>
            )
        }

        bookList.push(
            <>
                <div key="seniorTitle" className={AppStyle.subtitle2}>
                    {age.name}
                </div>
                <div key="seniotElement" className={mainStyle.list_container}>
                    {seniorElements}
                </div>
            </>
        );
    }
    // ---------------------------------------------------------------------------

    return (
        <>
            {bookList}
        </>
    );
}