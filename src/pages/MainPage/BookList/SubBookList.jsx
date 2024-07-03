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

    // const navigate = useNavigate();
    const baseUrl = "http://localhost:8080";

    // 추천 책 리스트
    const [list, setList] = useState([]);
    const [user, setUser] = useState([]);
    // 추천 리스트
    const bookList = [];
    const bookElements = [];
                
    useEffect(() => {
        // 로그인 여부 확인
        const login_check = async() => {
            try {
                const response = await axios.get(baseUrl + "/check");
                console.log(response.data);
                // 유저 정보 저장
                setUser(response.data);

                // 유저 정보가 null이 아니면 정보를 이메일로 세팅
                if(user) {
                    setUser(user.userEmail);
                } else {
                    setUser("로그인이 필요합니다.");
                }

            } catch (err) {
                console.log(err);
            }
        }

        // 도서관 추천 책 리스트 요청
        const recomend = async() => {
            try{
                const res = await axios.get(best_take_out_url);
                console.log(res.data);
                setList(res.data);
            } catch(e) {
                console.log(e);
            }
        };
        
        // 연령대별 추천 책 리스트 요청(반복문 필요)
        const ageRecomend = async(num) => {
            try{
                const res = await axios.get(best_take_out_url +
                    '&from_age=' + age[num].from_age + '&to_age=' + age[num].to_age);

                const jsonData = res.data;
                console.log(jsonData);
                console.log(jsonData.response.docs);
                // data 순서 -> response/docs[i]/doc/...
                const bookList = jsonData.response.docs;

                setList(bookList);
            } catch(e) {
                console.log(e);
            }
        }

        // login_check();
        // if(user) {
        //     recomend();
        // }
        ageRecomend(0);
    },[]);
    // ---------------------------------------------------------------------------
    // 로그인 여부에 따른 상단의 추천 도서 종류 변경
    // if(user) {
    //     // 사용자 추천 책 top 10
    //     bookList.push(
    //         <>
    //             <div className={AppStyle.subtitle2}>
    //                 지금 뜨는 도서
    //             </div>
    //             <div className={mainStyle.list_container}>
    //                 { bookElements }
    //             </div>
    //         </>
    //     );
    //     for(let i = 0; i < 10; i++) {
    //         bookList.push(
    //                 <>
    //                 <img
    //                 style={{ width: "6.1875rem", height: "8.875rem", borderRadius: "0.25rem" }}
    //                 src={ list[i].doc.bookImageURL }/>
    //                 </>
    //         )
    //     }
    // }

    // 추천 책 top 10
    for(let i = 0; i < 10; i++){
        bookElements.push(
            <>
                <img
                    key={i}
                    style={{ width: "6.1875rem", height: "8.875rem", borderRadius: "0.25rem" }}
                    // src={secList[i].doc.bookImageURL}
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
    // ---------------------------------------------------------------------------
    
    return(
        <>
            { bookList }
        </>
    );
}