import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
// ------------------------------------------------------
import mainStyle from '../MainPage.module.css'
import AppStyle from "../../../App.module.css";
//-------------------------------------------------------
import scroll from "./WidthScroll.jsx"

export default function SubBookList({ jungbonaru_url }) {
    const navigate = useNavigate();
    // const baseUrl = "http://localhost:8080";

    const [fstList, setFstList] = useState([]);
    const teenElements = [];
    const age = {name : '청소년 추천 도서' ,from_age : '13', to_age : '19'};

    // 추천 책 리스트
    const [list, setList] = useState([]);
    const [user, setUser] = useState(null);
    // 추천 리스트
    const bookList = [];
    const bookElements = [];

    // 책 상세페이지로 이동
    function BookDetail(isbn) {
        navigate("/SearchDetail?isbn13=" + isbn);
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

        // 도서관 추천 책 리스트 요청
        const recomend = async() => {
            try{
                const res = await axios.get(jungbonaru_url);
                const jsonData = res.data;

                // console.log(jsonData);
                // console.log(jsonData.response.docs);
                // data 순서 -> response/docs[i]/doc/...
                const bookList = jsonData.response.docs.slice(0, 10).map(book => book.doc.bookImageURL);

                console.log(bookList);
                setList(bookList);
            } catch(e) {
                console.log(e);
            }
        };

        // 연령대별 추천 책 리스트 요청(반복문 필요)
        const TeenRecomend = async() => {
            try{
                const res = await axios.get(jungbonaru_url +
                    '&from_age=' + age.from_age + '&to_age=' + age.to_age);

                const jsonData = res.data;
                console.log(jsonData);
                console.log(jsonData.response.docs);
                // data 순서 -> response/docs[i]/doc/...
                const bookList = jsonData.response.docs.slice(0, 10).map(book => book.doc.bookImageURL);

                setFstList(bookList);
            } catch(e) {
                console.log(e);
            }
        }

        login_check();
        if(user) {
            recomend();
        } else if(!user) {
            TeenRecomend();
        }
    },[]);
    // ---------------------------------------------------------------------------
    // 로그인 여부에 따른 상단의 추천 도서 종류 변경
    if(user) {
        // 사용자 추천 책 top 10
        for(let i = 0; i < 10; i++){
            bookElements.push(
                <>
                    <img
                        key={i}
                        style={{ width: "6.1875rem", height: "8.875rem", borderRadius: "0.25rem" }}
                        src={list[i]}
                    />
                </>
            )
        }

        bookList.push(
            <>
                <div key="title" className={AppStyle.subtitle2}>
                    지금 뜨는 도서
                </div>
                <div key="element" className={mainStyle.list_container}>
                    { bookElements }
                </div>
            </>
        );
    } else if(!user) {
        // 연령대별 추천 책 top 10
        for(let i = 0; i < 10; i++){
            teenElements.push(
                <>
                    <img
                        key={i}
                        style={{ width: "6.1875rem", height: "8.875rem", borderRadius: "0.25rem" }}
                        src={fstList[i]}
                    />
                </>
            );
        }
        bookList.push(
            <>
                <div key="teenTitle" className={AppStyle.subtitle2}>
                    {age.name}
                </div>
                <div key="teenElement" className={mainStyle.list_container}>
                    {teenElements}
                </div>
            </>
        );
    }

    // ---------------------------------------------------------------------------
    
    return(
        <>
            { bookList }
        </>
    );
}