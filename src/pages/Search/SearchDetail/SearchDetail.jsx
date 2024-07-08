// 수정본
import React, { useState } from 'react';
import {useLocation, useParams} from 'react-router-dom';
import useBookDetail from '../../../API/Aladin/useBookDetail.jsx';
import style from "./SearchDetail.module.css";
import AppStyle from "../../../App.module.css";
import Layout from "../../../Common/Layout/Layout.jsx";
import RelatedBooks from "../../../pages/Search/SearchDetail/RelatedBooks.jsx";
import BookActions from "../../../pages/Search/SearchDetail/BookActions/BookActions.jsx";
import SearchDetailHeader from "../SearchDetail/Header/SearchDetailHeader.jsx";  
import BookmarkIcon from "../../../assets/img/bookdetail/bookmark_icon.svg";
import Review from "../../../Review/Review.jsx";

const SearchDetail = () => {
    // isbn 받아오기
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const isbn = searchParams.get('isbn13');
    const item = searchParams.get('itemId');

  const { bookId } = useParams();
  const { bookDetail, isLoading, error } = useBookDetail(isbn);
  const [bookmarked, setBookmarked] = useState(false);

  const handleBookmarkClick = () => {
    setBookmarked(!bookmarked);
  };

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>;

  const defaultBookDetail = {
    "bookId": "9788960778818", //isbn13
    "coverUrl": "https://image.aladin.co.kr/product/205/12/coversum/0132350882_1.jpg",
    "title": "Clean Code: A Handbook of Agile Software Craftsmanship (Paperback) - A Handbook of Agile Software Craftsmanship",
    "author": "로버트 C. 마틴 (지은이)",
    "styleDesc": "",
    "publishDate": "2008-08-01",
    "publisher": "Prentice Hall",
    "category": "컴퓨터",
    "subcategory": "자바",
    "description": "",
    "itemId": "2726985",
    "like": true
  };

  const bookData = bookDetail;

  return (
    // <Layout>
    //   <SearchDetailHeader />
    //   <div className={style.container}>
    //     <div className={style.book_container}>
    //       <div className={style.txt_container}>
    //         <div className={style.title_container}>
    //           <div className={`${style.main_title}`}>
    //             {bookData.title}
    //           </div>
    //           <button
    //             className={`${style.bookmark} ${bookmarked ? style.bookmarked : ''}`}
    //             onClick={handleBookmarkClick}
    //           >
    //             <img
    //               src={BookmarkIcon}
    //               alt="북마크 아이콘"
    //             />
    //           </button>
    //         </div>
    //         <div className={`${AppStyle.Body4} ${style.text_normal} ${style.author_title}`}>
    //           {bookData.author}
    //         </div>
    //       </div>
    //
    //       <img className={style.Bookimg} src={bookData.coverUrl} alt="책 이미지" />
    //     </div>
    //
    //     <div className={style.detail_wrapper}>
    //
    //         <div className={`${AppStyle.subtitle1} ${style.info_title}`}>
    //           상세 정보
    //
    //         <div className={style.detail_component}>
    //           <div className={AppStyle.Body1}>줄거리</div>
    //           <div className={`${AppStyle.Body2} ${style.text_normal} `}>
    //             {bookData.description || "설명이 없습니다."}
    //           </div>
    //         </div>
    //
    //         <div className={style.detail_component}>
    //         <div className={AppStyle.Body1}>표제/저자사항</div>
    //         <div className={`${AppStyle.Body2} ${style.text_normal} `}>
    //           {bookData.title} / {bookData.author}
    //         </div></div>
    //         <div className={style.detail_component}>
    //           <div className={AppStyle.Body1}>자료 유형</div>
    //           <div className={`${AppStyle.Body2} ${style.text_normal} `}>
    //             단행본
    //           </div>
    //         </div>
    //         <div className={style.detail_component}>
    //           <div className={AppStyle.Body1}>발행사항</div>
    //           <div className={`${AppStyle.Body2} ${style.text_normal} `}>
    //             {bookData.publisher}, {bookData.publishDate}
    //           </div>
    //         </div>
    //         <div className={style.detail_component}>
    //           <div className={AppStyle.Body1}>분류사항</div>
    //           <div className={`${AppStyle.Body2} ${style.text_normal} `}>
    //             {bookData.category} &nbsp; &nbsp; {bookData.subcategory}
    //           </div>
    //         </div>
    //       </div>
    //     </div>
<>
            {/* 공공 도서관 검색 */}
            <BookActions isbn = { isbn } />
            {/* 리뷰 */}
            <Review item = { item } />
            <div>
              <RelatedBooks className={style.BookList} isbn = { isbn } />
            </div>
</>
    //   </div>
    // </Layout>
  );
};

export default SearchDetail;

