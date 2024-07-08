import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

// ------------------------------------------------------
import mainStyle from '../MainPage.module.css';
import AppStyle from "../../../App.module.css";
//-------------------------------------------------------
// import WidthScroll from "./WidthScroll.jsx";

export default function MainBookList(props) {

    const jungbonaru_url = props.jungbonaru_url;
    const user = props.user;

    const navigate = useNavigate();
    const baseUrl = "http://localhost:8080";

    // 추천 책 리스트
    const [list, setList] = useState([]);
    // 최상단 추천 리스트
    const bookList = [];
    const bookElements = [];

    // 책 상세페이지로 이동
    function BookDetail(isbn) {
        navigate("/SearchDetail?isbn13=" + isbn);
    }

    useEffect(() => {
        // 사용자 추천 책 리스트 요청
        const userRecommend = async() => {
            try {
                const token = localStorage.getItem('accessToken');
                console.log(token);
                const res = await axios.get("http://43.203.74.198:8000/api/book/recommendations",
                    {headers: { 'Authorization': `${token}` },
                    });

                const recomend = res.data.userRecommend;
                console.log(recomend);
                setList(recomend);
            } catch(e) {
                console.log(e);
            }
        };

        if(user) {
            console.log("Login");
            userRecommend();
        } else {
            console.log("logout");
        }
    }, [user]);

    useEffect(() => {
        if (!user) {
            const recomend = async() => {
                try{
                    const res = await axios.get(jungbonaru_url);
                    const jsonData = res.data;

                    // console.log(jsonData);
                    // console.log(jsonData.response.docs);
                    // data 순서 -> response/docs[i]/doc/...
                    const bookList = jsonData.response.docs.slice(0, 10).map(book => book.doc.bookImageURL);

                    setList(bookList);
                } catch(e) {
                    console.log(e);
                }
            };
            recomend();
        }
    }, [jungbonaru_url, user]);
    // ---------------------------------------------------------------------------
    // 로그인 여부에 따른 상단의 추천 도서 종류 변경
    if(user) {
        // 사용자 추천 책 top 10
        for(let i = 0; i < 10; i++) {
            if(list[i]) {
                bookElements.push(
                    <>
                        <img
                            style={{ width: "10.1875rem", height: "14.0625rem", borderRadius: "0.25rem" }}
                            src={ list[i].coverURL }
                            onClick={ () => BookDetail(list[i].isbn13) } />
                    </>
                )
            }
        }
        bookList.push(
            <>
                <div className={AppStyle.subtitle2}>
                    { user.nickname }님을 위한 맞춤 추천
                </div>
                <div className={mainStyle.list_container}>
                    { bookElements }
                </div>
            </>
        );
    } else if(!user) {
        // 추천 책 top 10
        for(let i = 0; i < 10; i++){
            if(list[i]) {
                bookElements.push(
                    <>
                        <img
                            key={i}
                            style={{ width: "10.1875rem", height: "14.0625rem", borderRadius: "0.25rem" }}
                            src={list[i]}
                        />
                    </>
                )
            }
        }

        bookList.push(
            <>
                <div key="title" className={AppStyle.subtitle2}>
                    지금 뜨는 도서
                </div>
                {/*<WidthScroll>*/}
                    <div key="element" className={ `${mainStyle.list_container}` }>
                        { bookElements }
                    </div>
                {/*</WidthScroll>*/}
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