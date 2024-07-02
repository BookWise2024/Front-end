// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import style from "./HomeHeader.module.css";
import MenuIcon from "../../../assets/img/menu/icon_menu.svg";
import BookIcon from "../../../assets/img/menu/book_icon_white.svg";
import TextLogo from "../../../assets/img/menu/logo/bookwise_text_logo.svg";
const HomeHeader = () => {
  // eslint-disable-next-line no-unused-vars
  const local = "http://localhost:5173/";

  const navigate = useNavigate();

  const hamberger = async () => {
    // 삼단바를 click하면 비동기적으로 hambergermenu로 이동
    navigate("sub");
  };

  return (
    <header className={style.header}>
      <div className={style.icon} onClick={hamberger}>
      
        <img src={MenuIcon} alt="메뉴 아이콘" />
      </div>
      <div className={style.logo} onClick={() => {
        // logo를 click하면 메인페이지로 이동
        navigate("/");
      }}>
        <img src={TextLogo} alt="로고" />
      </div>
      <div className={style.icon} onClick={() => {
        // 선호책 아이콘을 click하면 선호책 페이지로 이동
        navigate("선호책 경로");
      }}>
        <img src={BookIcon} alt="선호책 아이콘" />
      </div>
    </header>
  );
};

export default HomeHeader;
