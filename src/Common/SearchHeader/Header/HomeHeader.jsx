import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./HomeHeader.module.css";
import MenuIcon from "../../../assets/img/menu/icon_menu.svg";
import BookIcon from "../../../assets/img/menu/book_icon_white.svg";
import TextLogo from "../../../assets/img/menu/logo/bookwise_text_logo.svg";
import SubMenu from "../../../components/HambergerMenu/SubMenu.jsx"; 
const HomeHeader = () => {
  const navigate = useNavigate();
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const toggleSubMenu = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };

  return (
    <>
      <header className={style.header}>
        <div className={style.icon} onClick={toggleSubMenu}>
          <img src={MenuIcon} alt="메뉴 아이콘" />
        </div>
        <div className={style.logo} onClick={() => navigate("/")}>
          <img src={TextLogo} alt="로고" />
        </div>
        <div className={style.icon} onClick={() => navigate("/BookLike")}>
          <img src={BookIcon} alt="선호책 아이콘" />
        </div>
      </header>
      <SubMenu isOpen={isSubMenuOpen} onClose={() => setIsSubMenuOpen(false)} />
    </>
  );
};

export default HomeHeader;