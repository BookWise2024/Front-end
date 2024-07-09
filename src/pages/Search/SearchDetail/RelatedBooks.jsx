// import style from "./RelatedBooks.module.css";
// // import Book1 from "../../../assets/img/book/book1.png";
// // import Book2 from "../../../assets/img/book/book2.png";
// // import Book3 from "../../../assets/img/book/book3.png";
// // import Book4 from "../../../assets/img/book/book4.png";
// import AppStyle from "../../../App.module.css";
// import react, { useState, useEffect } from 'react';
// import {useLocation, useNavigate} from "react-router-dom";
// import axios from 'axios';

// const RelatedBooks = (props) => {
//     // test code
//     // const location = useLocation();
//     // const searchParams = new URLSearchParams(location.search);
//     // const bookId = searchParams.get('isbn13');
//     // console.log(bookId);

//     const navigate = useNavigate();
//     const bookId = props.isbn;

//     // 추천 책 리스트
//     const [list, setList] = useState(null);

//     // 추천 리스트
//     const elements = [];
//     useEffect(() => {
//         // 유사 책 리스트 요청
//         const SimilarRecomend = async() => {
//             try{
//                 const res = await axios.get("http://43.203.74.198:8000/api/book/similar/" + bookId);

//                 const jsonData = res.data;
//                 console.log(jsonData);

//                 setList(jsonData);
//             } catch(e) {
//                 console.log(e);
//             }
//         }
//         SimilarRecomend();
//     },[bookId]); // bookId를 dependency array에 추가하여 bookId 변경 시마다 요청

//     // 책 상세 페이지로 이동
//     const bookDetail = (bookId) => {
//         navigate("/SearchDetail?isbn13=" + bookId);
//     }

//     // 유사 책 top 10
//     if (list) { // list가 null이 아닌 경우에만 루프 실행
//         for(let i = 0; i < 10; i++){
//             if(list[i]) {
//                 elements.push(
//                     <img
//                         key={i}
//                         style={{ width: "6.1875rem", height: "8.875rem", borderRadius: "0.25rem" }}
//                         src={list[i].coverURL}
//                         onClick={ () => bookDetail(list[i].isbn13) }
//                         alt={`Cover of ${list[i].title}`}
//                     />
//                 )
//             }
//         }
//     }

//     return (
//         <div className={style.container}>
//             <div className={AppStyle.subtitle2}>
//                 이 책과 비슷한 작품
//             </div>
//             <div key="element" className={style.list_container}>
//                 {elements}
//             </div>
//         </div>
//     );
// };

// export default RelatedBooks;

// 수정본(혜인)
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import style from "./RelatedBooks.module.css";
import AppStyle from "../../../App.module.css";
import DragXComponent from '../../../Common/Scroll/DragXComponent';

const RelatedBooks = (props) => {
    const navigate = useNavigate();
    const bookId = props.isbn;

    const [list, setList] = useState(null);

    useEffect(() => {
        const SimilarRecomend = async () => {
            try {
                const res = await axios.get("http://43.203.74.198:8000/api/book/similar/" + bookId);
                const jsonData = res.data;
                console.log(jsonData);
                setList(jsonData);
            } catch (e) {
                console.log(e);
            }
        };
        SimilarRecomend();
    }, [bookId]);

    const bookDetail = (bookId) => {
        navigate("/SearchDetail?isbn13=" + bookId);
    };

    return (
        <div className={style.container}>
            <div className={`${AppStyle.subtitle2} ${style.title}`}>
                이 책과 비슷한 작품
            </div>
            <DragXComponent>
                <div className={style.book_list}>
                    {list && list.length > 0 ? (
                        list.slice(0, 10).map((book, index) => (
                            <img
                                key={index}
                                className={style.book_image}
                                src={book.coverURL}
                                onClick={() => bookDetail(book.isbn13)}
                                alt={`Cover of ${book.title}`}
                            />
                        ))
                    ) : (
                        <div className={style.no_books}>추천 책이 없습니다.</div>
                    )}
                </div>
            </DragXComponent>
        </div>
    );
};

export default RelatedBooks;