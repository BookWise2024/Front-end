// // import React, { useState } from 'react';
// // import style from "./SearchDetail.module.css";
// // import AppStyle from "../../../App.module.css";
// // import Layout from "../../../Common/Layout/Layout.jsx";
// // import RelatedBooks from "../../../pages/Search/SearchDetail/RelatedBooks.jsx";
// // import BookActions from "../../../Common/Book/BookActions.jsx";
// // import SearchDetailHeader from "../SearchDetail/Header/SearchDetailHeader.jsx";  
// // import BookmarkIcon from "../../../assets/img/bookdetail/bookmark_icon.svg";
// // import Book2 from "../../../assets/img/book/book2.png";
// // import Review from "../../../Review/Review.jsx";

// // const SearchDetail = () => {
// //   const [bookmarked, setBookmarked] = useState(false);

// //   const handleBookmarkClick = () => {
// //     setBookmarked(!bookmarked);
// //   };

// //   return (
// //     <Layout>
// //       <SearchDetailHeader />  
// //       <div className={style.container}>
// //         <div className={style.book_container}>
// //           <div className={style.txt_container}>
// //             <div className={style.title_container}>
// //               <div className={`${AppStyle.title1} ${style.main_title}`}>
// //                 해리포터 : 죽음의 성물
// //               </div>
// //               <button
// //                 className={`${style.bookmark} ${bookmarked ? style.bookmarked : ''}`}
// //                 onClick={handleBookmarkClick}
// //               >
// //                 <img
// //                   src={BookmarkIcon}
// //                   alt="북마크 아이콘"
// //                 />
// //               </button>
// //             </div>
// //             <div className={`${AppStyle.Body4} ${style.text_normal} ${style.author_title}`}>
// //               Rowling, J . K.
// //             </div>
// //           </div>

// //           <img className={style.Bookimg} src={Book2} alt="책 이미지" />
// //         </div>

// //         <div className={style.detail_wrapper}>
// //           <div className={style.detail_component}>
// //             <div className={`${AppStyle.subtitle1} ${style.info_title}`}>
// //               상세 정보
// //             </div>
// //             <div className={AppStyle.Body1}>줄거리</div>
// //             <div className={`${AppStyle.Body2} ${style.text_normal} `}>
// //               덤블도어교장의 죽음 이후, 마법부는 죽음을 먹는자들 에게 점령당하고
// //               호그와트는 위기에 빠진다.
// //             </div>
// //           </div>

// //           <div className={style.detail_component}>
// //             <div className={AppStyle.Body1}>표제/저자사항</div>
// //             <div className={`${AppStyle.Body2} ${style.text_normal} `}>
// //               덤블도어교장의 죽음 이후, 마법부는 죽음을 먹는자들 에게 점령당하고
// //               호그와트는 위기에 빠진다.
// //             </div>
// //             <div className={style.detail_component}>
// //               <div className={AppStyle.Body1}>자료 유형</div>
// //               <div className={`${AppStyle.Body2} ${style.text_normal} `}>
// //                 단행본
// //               </div>
// //             </div>
// //             <div className={style.detail_component}>
// //               <div className={AppStyle.Body1}>발행사항</div>
// //               <div className={`${AppStyle.Body2} ${style.text_normal} `}>
// //                 파주 : 문학수첩, 2019
// //               </div>
// //             </div>
// //             <div className={style.detail_component}>
// //               <div className={AppStyle.Body1}>형태사항</div>
// //               <div className={`${AppStyle.Body2} ${style.text_normal} `}>
// //                 278 p ; 23 cm
// //               </div>
// //             </div>
// //             <div className={style.detail_component}>
// //               <div className={AppStyle.Body1}>분류사항</div>
// //               <div className={`${AppStyle.Body2} ${style.text_normal} `}>
// //                 영국 현대 소설&nbsp; &nbsp; 판타지 소설
// //               </div>
// //             </div>
// //           </div>
// //         </div>

// //         <BookActions />
// //         <Review />
// //         <div>
// //           <RelatedBooks className={style.BookList} />
// //         </div>
// //       </div>
// //     </Layout>
// //   );
// // };

// // export default SearchDetail;

// // SearchDetail.jsx
// import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';
// import useAladinBookDetail from '../../../API/Aladin/useAladinBookDetail.jsx';
// import style from "./SearchDetail.module.css";
// import AppStyle from "../../../App.module.css";
// import Layout from "../../../Common/Layout/Layout.jsx";
// import RelatedBooks from "../../../pages/Search/SearchDetail/RelatedBooks.jsx";
// import BookActions from "../../../Common/Book/BookActions.jsx";
// import SearchDetailHeader from "../SearchDetail/Header/SearchDetailHeader.jsx";  
// import BookmarkIcon from "../../../assets/img/bookdetail/bookmark_icon.svg";
// import Review from "../../../Review/Review.jsx";

// const SearchDetail = () => {
//   const { bookId } = useParams();
//   const { bookDetail, isLoading, error } = useAladinBookDetail(bookId);
//   const [bookmarked, setBookmarked] = useState(false);

//   const handleBookmarkClick = () => {
//     setBookmarked(!bookmarked);
//   };

//   if (isLoading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error.message}</div>;
//   if (!bookDetail) {
//     return <div>No book details available</div>;
//   }

//   return (
//     <Layout>
//       <SearchDetailHeader />  
//       <div className={style.container}>
//         <div className={style.book_container}>
//           <div className={style.txt_container}>
//             <div className={style.title_container}>
//               <div className={`${AppStyle.title1} ${style.main_title}`}>
//                 {bookDetail.title}
//               </div>
//               <button
//                 className={`${style.bookmark} ${bookmarked ? style.bookmarked : ''}`}
//                 onClick={handleBookmarkClick}
//               >
//                 <img
//                   src={BookmarkIcon}
//                   alt="북마크 아이콘"
//                 />
//               </button>
//             </div>
//             <div className={`${AppStyle.Body4} ${style.text_normal} ${style.author_title}`}>
//               {bookDetail.author}
//             </div>
//           </div>

//           <img className={style.Bookimg} src={bookDetail.coverUrl} alt="책 이미지" />
//         </div>

//         <div className={style.detail_wrapper}>
//           <div className={style.detail_component}>
//             <div className={`${AppStyle.subtitle1} ${style.info_title}`}>
//               상세 정보
//             </div>
//             <div className={AppStyle.Body1}>줄거리</div>
//             <div className={`${AppStyle.Body2} ${style.text_normal} `}>
//               {bookDetail.description}
//             </div>
//           </div>

//           <div className={style.detail_component}>
//             <div className={AppStyle.Body1}>표제/저자사항</div>
//             <div className={`${AppStyle.Body2} ${style.text_normal} `}>
//               {bookDetail.title} / {bookDetail.author}
//             </div>
//             <div className={style.detail_component}>
//               <div className={AppStyle.Body1}>자료 유형</div>
//               <div className={`${AppStyle.Body2} ${style.text_normal} `}>
//                 단행본
//               </div>
//             </div>
//             <div className={style.detail_component}>
//               <div className={AppStyle.Body1}>발행사항</div>
//               <div className={`${AppStyle.Body2} ${style.text_normal} `}>
//                 {bookDetail.publisher}, {bookDetail.publishDate}
//               </div>
//             </div>
//             <div className={style.detail_component}>
//               <div className={AppStyle.Body1}>형태사항</div>
//               <div className={`${AppStyle.Body2} ${style.text_normal} `}>
//                 278 p ; 23 cm
//               </div>
//             </div>
//             <div className={style.detail_component}>
//               <div className={AppStyle.Body1}>분류사항</div>
//               <div className={`${AppStyle.Body2} ${style.text_normal} `}>
//                 {bookDetail.category} &nbsp; &nbsp; {bookDetail.subcategory}
//               </div>
//             </div>
//           </div>
//         </div>

//         <BookActions />
//         <Review />
//         <div>
//           <RelatedBooks className={style.BookList} />
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default SearchDetail;


// 수정본
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useBookDetail from '../../../API/Aladin/useBookDetail.jsx';
import style from "./SearchDetail.module.css";
import AppStyle from "../../../App.module.css";
import Layout from "../../../Common/Layout/Layout.jsx";
import RelatedBooks from "../../../pages/Search/SearchDetail/RelatedBooks.jsx";
import BookActions from "../../../Common/Book/BookActions.jsx";
import SearchDetailHeader from "../SearchDetail/Header/SearchDetailHeader.jsx";  
import BookmarkIcon from "../../../assets/img/bookdetail/bookmark_icon.svg";
import Review from "../../../Review/Review.jsx";

const SearchDetail = () => {
  const { bookId } = useParams();
  const { bookDetail, isLoading, error } = useBookDetail(bookId);
  const [bookmarked, setBookmarked] = useState(false);

  const handleBookmarkClick = () => {
    setBookmarked(!bookmarked);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const defaultBookDetail = {
    "bookId": "0132350882",
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

  const bookData = bookDetail || defaultBookDetail;

  return (
    <Layout>
      <SearchDetailHeader />  
      <div className={style.container}>
        <div className={style.book_container}>
          <div className={style.txt_container}>
            <div className={style.title_container}>
              <div className={`${style.main_title}`}>
                {bookData.title}
              </div>
              <button
                className={`${style.bookmark} ${bookmarked ? style.bookmarked : ''}`}
                onClick={handleBookmarkClick}
              >
                <img
                  src={BookmarkIcon}
                  alt="북마크 아이콘"
                />
              </button>
            </div>
            <div className={`${AppStyle.Body4} ${style.text_normal} ${style.author_title}`}>
              {bookData.author}
            </div>
          </div>

          <img className={style.Bookimg} src={bookData.coverUrl} alt="책 이미지" />
        </div>

        <div className={style.detail_wrapper}>
         
            <div className={`${AppStyle.subtitle1} ${style.info_title}`}>
              상세 정보
           
            <div className={style.detail_component}>
              <div className={AppStyle.Body1}>줄거리</div>
              <div className={`${AppStyle.Body2} ${style.text_normal} `}>
                {bookData.description || "설명이 없습니다."}
              </div>
            </div>
         
            <div className={style.detail_component}>
            <div className={AppStyle.Body1}>표제/저자사항</div>
            <div className={`${AppStyle.Body2} ${style.text_normal} `}>
              {bookData.title} / {bookData.author}
            </div></div>
            <div className={style.detail_component}>
              <div className={AppStyle.Body1}>자료 유형</div>
              <div className={`${AppStyle.Body2} ${style.text_normal} `}>
                단행본
              </div>
            </div>
            <div className={style.detail_component}>
              <div className={AppStyle.Body1}>발행사항</div>
              <div className={`${AppStyle.Body2} ${style.text_normal} `}>
                {bookData.publisher}, {bookData.publishDate}
              </div>
            </div>
            <div className={style.detail_component}>
              <div className={AppStyle.Body1}>형태사항</div>
              <div className={`${AppStyle.Body2} ${style.text_normal} `}>
                278 p ; 23 cm
              </div>
            </div>
            <div className={style.detail_component}>
              <div className={AppStyle.Body1}>분류사항</div>
              <div className={`${AppStyle.Body2} ${style.text_normal} `}>
                {bookData.category} &nbsp; &nbsp; {bookData.subcategory}
              </div>
            </div>
          </div>
        </div>

        <BookActions />
        <Review />
        <div>
          <RelatedBooks className={style.BookList} />
        </div>
      </div>
    </Layout>
  );
};

export default SearchDetail;

