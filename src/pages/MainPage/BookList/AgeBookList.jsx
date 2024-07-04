import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
// ------------------------------------------------------
import mainStyle from '../MainPage.module.css'
import AppStyle from "../../../App.module.css";
//-------------------------------------------------------
import scroll from "./WithScroll.jsx"

export default function MainBookList() {
    // 정보나루 api_key(정보나루 api 문서 page7~8 참고)
    const jungbonaru_api = "ff319884fdb9bb83c452d9c202b01c1a5c1e9e9e04030d785bbdec6aaa16e638";
    const best_take_out_url = "http://data4library.kr/api/loanItemSrch?authKey=" + jungbonaru_api + '&format=json';
    const age = [
        {name : '청소년' ,from_age : '0', to_age : '19'},
        {name : '청년', from_age : '20', to_age : '39'},
        {name : '장년', from_age : '40', to_age : '100'}
    ];

    // 추천 책 리스트
    const [fstList, setFstList] = useState([]);
    const [secList, setSecList] = useState([]);
    const [thdList, setThdList] = useState([]);
    const [user, setUser] = useState([]);
    // 추천 리스트
    const bookList = [];
    const bookElements = [];

    useEffect(() => {
        // 연령대별 추천 책 리스트 요청(반복문 필요)
        const ageRecomend = async() => {
            try{
                const res = await axios.get(best_take_out_url +
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
        ageRecomend();
    },[]);
    // ---------------------------------------------------------------------------
    // 추천 책 top 10
    for(let i = 0; i < 10; i++){
        bookElements.push(
            <>
                <img
                    key={i}
                    style={{ width: "6.1875rem", height: "8.875rem", borderRadius: "0.25rem" }}
                    // src={fstList[i].doc.bookImageURL}
                    src={fstList[i]}
                />
            </>
        )
    }

    bookList.push(
        <>
            <div key="title" className={AppStyle.subtitle2}>
                연령대별 도서
            </div>
            <div key="element" className={mainStyle.list_container}>
                { bookElements }
            </div>
        </>
    );
    // ---------------------------------------------------------------------------

    return(
        <>
            { bookList }
        </>
    );
}