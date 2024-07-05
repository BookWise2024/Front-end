import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
// ------------------------------------------------------
import mainStyle from '../MainPage.module.css'
import AppStyle from "../../../App.module.css";
//-------------------------------------------------------
import scroll from "./WidthScroll.jsx"

export default function MainBookList({ jungbonaru_url }) {
    const age = [
        // {name : '미래를 꿈꾸는 청소년을 위한 추천 도서' ,from_age : '13', to_age : '19'},
        // {name : '고단하게 현실을 살아가는 청년을 위한 추천 도서', from_age : '20', to_age : '39'},
        // {name : '불혹을 넘긴 이들에게 안식을 주기 위한 추천 도서', from_age : '40', to_age : '100'}
        {name : '청소년 추천 도서' ,from_age : '13', to_age : '19'},
        {name : '청년 추천 도서', from_age : '20', to_age : '39'},
        {name : '장년 추천 도서', from_age : '40', to_age : '100'}
    ];

    // useState를 이차원 배열로 이용하는 방법을 알면 for문 실행 가능

    // 추천 책 리스트
    const [fstList, setFstList] = useState([]);
    const [secList, setSecList] = useState([]);
    const [thdList, setThdList] = useState([]);
    const [user, setUser] = useState([]);
    // 추천 리스트
    const bookList = [];
    const teenElements = [];
    const adultElements = [];
    const seniorElements = [];

    useEffect(() => {
        // 연령대별 추천 책 리스트 요청(반복문 필요)
        const TeenRecomend = async() => {
            try{
                const res = await axios.get(jungbonaru_url +
                    '&from_age=' + age[parseInt(0)].from_age + '&to_age=' + age[parseInt(0)].to_age);

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

        const AdultRecomend = async() => {
            try{
                const res = await axios.get(jungbonaru_url +
                    '&from_age=' + age[parseInt(1)].from_age + '&to_age=' + age[parseInt(1)].to_age);

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

        const SeniorRecomend = async() => {
            try{
                const res = await axios.get(jungbonaru_url +
                    '&from_age=' + age[parseInt(2)].from_age + '&to_age=' + age[parseInt(2)].to_age);

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
        TeenRecomend();
        AdultRecomend();
        SeniorRecomend();
    },[]);
    // ---------------------------------------------------------------------------
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
        )
    }

    for(let i = 0; i < 10; i++){
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
            <div key="teenTitle" className={AppStyle.subtitle2}>
                {age[parseInt(0)].name}
            </div>
            <div key="teenElement" className={mainStyle.list_container}>
                {teenElements}
            </div>
            <div key="adultTitle" className={AppStyle.subtitle2}>
                {age[parseInt(1)].name}
            </div>
            <div key="adultElement" className={mainStyle.list_container}>
                {adultElements}
            </div>
            <div key="seniorTitle" className={AppStyle.subtitle2}>
                {age[parseInt(2)].name}
            </div>
            <div key="seniotElement" className={mainStyle.list_container}>
                {seniorElements}
            </div>
        </>
    );
    // ---------------------------------------------------------------------------

    return (
        <>
            {bookList}
        </>
    );
}