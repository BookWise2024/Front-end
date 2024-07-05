// eslint-disable-next-line no-unused-vars
import React from "react";
import { useNavigate } from "react-router-dom";
import style from "./SearchDetailHeader.module.css";

import LeftArrow from "../../../../assets/img/menu/arrow/arrow_left.svg"
import BookIcon from "../../../../assets/img/menu/book_icon_white.svg"

const SearchDetailHeader = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); // 뒤로가기 기능
  };

  const goToBookLike = () => {
    navigate("/BookLike"); // BookLike 페이지로 이동
  };

  return (
    <header className={style.header}>
      <div className={style.icon} >
        <img src={LeftArrow} onClick={goBack} alt="뒤로가기 아이콘" />
      </div>
      <div className={style.title}>도서 상세</div>
      <div className={style.icon}>
        <img src={BookIcon} onClick={goToBookLike} alt="도서 아이콘" />
      </div>
    </header>
  );
};

export default SearchDetailHeader;
