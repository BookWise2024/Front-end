import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

// ------------------------------------------------------
import mainStyle from '../MainPage.module.css';
import AppStyle from "../../../App.module.css";
//-------------------------------------------------------
// import WidthScroll from "./WidthScroll.jsx";

export default function MainBookList({ jungbonaru_url }) {

    // const navigate = useNavigate();
    const baseUrl = "http://localhost:8080";

    // 추천 책 리스트
    const [list, setList] = useState([]);
    const [user, setUser] = useState(null);
    // 최상단 추천 리스트
    const bookList = [];
    const bookElements = [];
                
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
                console.log(res.data);
                setList(res.data);
            } catch(e) {
                console.log(e);
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

                setList(bookList);
            } catch(e) {
                console.log(e);
            }
        };
        
        login_check();
        if(user) {
            userRecommend();
        } else if(!user) {
            recomend();
        }
    },[]);
    // ---------------------------------------------------------------------------
    // 로그인 여부에 따른 상단의 추천 도서 종류 변경
    if(user) {
        // // 사용자 추천 책 top 10
        // bookList.push(
        //     <>
        //         <div className={AppStyle.subtitle2}>
        //             { user.nickname }님을 위한 맞춤 추천
        //         </div>
        //         <div className={mainStyle.list_container}>
        //             { bookElements }
        //         </div>
        //     </>
        // );
        // for(let i = 0; i < 10; i++) {
        //     bookList.push(
        //             <>
        //             <img
        //             style={{ width: "10.1875rem", height: "14.0625rem", borderRadius: "0.25rem" }}
        //             src={ list[i].image }/>
        //             </>
        //     )
        // }
    } else if(!user) {
        // 추천 책 top 10
        for(let i = 0; i < 10; i++){
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