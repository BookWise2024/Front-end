import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
// ------------------------------------------------------
import mainStyle from '../MainPage.module.css';
import AppStyle from "../../../App.module.css";
//-------------------------------------------------------

export default function ThirdBookList(props) {

    const jungbonaru_url = props.jungbonaru_url;
    const user = props.user;
    const token = localStorage.getItem('accessToken');

    const navigate = useNavigate();

    const [secList, setSecList] = useState([]);
    const adultElements = [];
    const age = {name : '청년 추천 도서', from_age : '20', to_age : '39'};

    // 추천 책 리스트
    const [list, setList] = useState([]);
    // 카테고리
    const [category, setCategory] = useState(null);
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
                console.log(token);
                const res = await axios.get("http://43.203.74.198:8000/api/book/recommendations",
                    {headers: { 'Authorization': `${token}` },
                    });

                console.log(res.data);
                const recomend = res.data.preferOne;
                const category = res.data.wishcategories[parseInt(0)];
                // console.log(recomend);
                // console.log(category);
                setList(recomend);
                setCategory(category)
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
            // 연령대별 추천 책 리스트 요청(반복문 필요)
            const AdultRecomend = async() => {
                try{
                    const res = await axios.get(jungbonaru_url +
                        '&from_age=' + age.from_age + '&to_age=' + age.to_age);

                    const jsonData = res.data;
                    console.log(jsonData);
                    console.log(jsonData.response.docs);
                    // data 순서 -> response/docs[i]/doc/...
                    const bookList = jsonData.response.docs.slice(0, 10).map(book => book.doc.bookImageURL);

                    setSecList(bookList);
                } catch(e) {
                    console.log(e);
                }
            }
            AdultRecomend();
        }
    }, [jungbonaru_url, user]);
    // ---------------------------------------------------------------------------
    // 로그인 여부에 따른 상단의 추천 도서 종류 변경
    if(user) {
        // 사용자 추천 책 top 10
        for(let i = 0; i < 10; i++) {
            if(secList[i]) {
                bookElements.push(
                    <>
                        <img
                            style={{ width: "6.1875rem", height: "8.875rem", borderRadius: "0.25rem" }}
                            src={ list[i].coverURL }
                            onClick={ () => BookDetail(list[i].isbn13) } />
                    </>
                )
            }
        }
        bookList.push(
            <>
                <div className={AppStyle.subtitle2}>
                    { category } 추천
                </div>
                <div className={mainStyle.list_container}>
                    { bookElements }
                </div>
            </>
        );
    } else if(!user) {
        // 추천 책 top 10
        for(let i = 0; i < 10; i++){
            if(secList[i]) {
                adultElements.push(
                    <>
                        <img
                            key={i}
                            style={{ width: "6.1875rem", height: "8.875rem", borderRadius: "0.25rem" }}
                            src={secList[i]}
                        />
                    </>
                )
            }
        }

        bookList.push(
            <>
                <div key="adultTitle" className={AppStyle.subtitle2}>
                    {age.name}
                </div>
                <div key="adultElement" className={mainStyle.list_container}>
                    {adultElements}
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