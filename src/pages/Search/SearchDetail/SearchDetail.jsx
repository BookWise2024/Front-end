import React, { useState } from 'react';
import style from "./SearchDetail.module.css";
import AppStyle from "../../../App.module.css";
import Layout from "../../../Common/Layout/Layout.jsx";
import BookList from "../../../Common/Book/BookList.jsx";
import BookActions from "../../../Common/Book/BookActions.jsx";
import SearchDetailHeader from "../SearchDetail/Header/SearchDetailHeader.jsx"; // DetailHeader -> SearchDetailHeader로 변경
import BookmarkIcon from "../../../assets/img/bookdetail/bookmark_icon.svg";
import Book2 from "../../../assets/img/book/book2.png";
import Review from "../../../Review/Review.jsx";

const SearchDetail = () => {
  const [bookmarked, setBookmarked] = useState(false);

  const handleBookmarkClick = () => {
    setBookmarked(!bookmarked);
  };

  return (
    <Layout>
      <SearchDetailHeader />  
      <div className={style.container}>
        <div className={style.book_container}>
          <div className={style.txt_container}>
            <div className={style.title_container}>
              <div className={`${AppStyle.title1} ${style.main_title}`}>
                해리포터 : 죽음의 성물
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
              Rowling, J . K.
            </div>
          </div>

          <img className={style.Bookimg} src={Book2} alt="책 이미지" />
        </div>

        <div className={style.detail_wrapper}>
          <div className={style.detail_component}>
            <div className={`${AppStyle.subtitle1} ${style.info_title}`}>
              상세 정보
            </div>
            <div className={AppStyle.Body1}>줄거리</div>
            <div className={`${AppStyle.Body2} ${style.text_normal} `}>
              덤블도어교장의 죽음 이후, 마법부는 죽음을 먹는자들 에게 점령당하고
              호그와트는 위기에 빠진다.
            </div>
          </div>

          <div className={style.detail_component}>
            <div className={AppStyle.Body1}>표제/저자사항</div>
            <div className={`${AppStyle.Body2} ${style.text_normal} `}>
              덤블도어교장의 죽음 이후, 마법부는 죽음을 먹는자들 에게 점령당하고
              호그와트는 위기에 빠진다.
            </div>
            <div className={style.detail_component}>
              <div className={AppStyle.Body1}>자료 유형</div>
              <div className={`${AppStyle.Body2} ${style.text_normal} `}>
                단행본
              </div>
            </div>
            <div className={style.detail_component}>
              <div className={AppStyle.Body1}>발행사항</div>
              <div className={`${AppStyle.Body2} ${style.text_normal} `}>
                파주 : 문학수첩, 2019
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
                영국 현대 소설&nbsp; &nbsp; 판타지 소설
              </div>
            </div>
          </div>
        </div>

        <BookActions />
        <Review />
        <div>
          <BookList className={style.BookList} />
        </div>
      </div>
    </Layout>
  );
};

export default SearchDetail;
