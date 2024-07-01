// eslint-disable-next-line no-unused-vars
import React from "react";
import { useNavigate } from "react-router-dom";
import style from "./SearchDetailHeader.module.css";

// 아이콘 임포트
import LeftArrow from "../../../../assets/img/menu/arrow/arrow_left.svg";
import BookIcon from "../../../../assets/img/menu/book_icon_white.svg"; // 실제 아이콘 경로로 변경 필요

const SearchDetailHeader = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); // 뒤로가기 기능
  };

  return (
    <header className={style.header}>
      <div className={style.icon} onClick={goBack}>
        <img src={LeftArrow} alt="뒤로가기 아이콘" />
      </div>
      <div className={style.title}>도서 상세</div>
      <div className={style.icon}>
        <img src={BookIcon} alt="도서 아이콘" />
      </div>
    </header>
  );
};

export default SearchDetailHeader;
