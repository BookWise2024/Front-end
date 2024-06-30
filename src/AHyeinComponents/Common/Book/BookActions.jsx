// eslint-disable-next-line no-unused-vars
import React from "react";
import styles from "./BookActions.module.css";

const BookActions = () => {
  return (
    <div className={styles.container}>
      <div className={styles.bookActionBox}>
        {/* 공공 도서관 소장 정보 & 도서비교하기가 들어갈 파란 부분 * */}
        <div className={styles.actionTitle}>공공도서관 검색</div>

        <div>내 주변 도서관에서 원하는 책을 확인하고 대여하세요</div>
        <div>사진이 들어가야 하는데 그 사진이 두동강</div>
        <button className={styles.button}>도서관 검색</button>
      </div>
    </div>
  );
};

export default BookActions;
