// eslint-disable-next-line no-unused-vars
import React from "react";
import styles from "./BookActions.module.css";

const BookActions = () => {
  return (
    <div className={styles.container}>
      <div className={styles.bookActionBox}>
  
        {/* 공공 도서관 소장 정보 & 도서비교하기가 들어갈 파란 부분 * */}
        <div className={styles.actionTitle} >공공도서관 소장 정보</div>
        <button className={styles.button}>도서관 조회하기</button>
      </div>
      <div className={styles.bookActionBox}>
 
        {/* 공공 도서관 소장 정보 & 도서비교하기가 들어갈 파란 부분 * */}
        <div className={styles.actionTitle}>도서 비교하기</div>
        <button className={styles.button}>비교하러가기</button>
      </div>
    </div>
  );
};

export default BookActions;
