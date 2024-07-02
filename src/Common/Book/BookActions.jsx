// eslint-disable-next-line no-unused-vars
import React from "react";
import styles from "./BookActions.module.css";

import AppStyle from "../../App.module.css";
import LibrarySearch from "../../assets/img/bookdetail/LibrarySearch.png";
import Button from "../../Common/Button/Button2.jsx"
const BookActions = () => {
  return (
    <div className={styles.container}>
      <div className={styles.bookActionBox}>
        {/* 공공 도서관 소장 정보 & 도서비교하기가 들어갈 파란 부분 */}
        <div className={styles.Search_txt_box}>
          <div style={{ fontFamily: "Jalnan2" }} className={styles.actionTitle}>
            공공도서관 검색
          </div>
          <div  className={`${styles.message}  ${AppStyle.Body5}`}>
            내 주변 도서관에서 원하는
            <br /> 책을 확인하고 대여하세요
          </div>
          <Button />
          
         
        </div>
        <img
          className={styles.LibrarySearchIcon}
          src={LibrarySearch}
          alt="도서관 일러스트"
        />
      </div>
    </div>
  );
};

export default BookActions;
