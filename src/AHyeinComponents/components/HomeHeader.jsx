import style from "./HomeHeader.module.css"

import MenuIcon from "../assets/img/icon_menu.svg";
import BookIcon from "../assets/img/icon_book.svg";
import TextLogo from "../assets/img/text_logo.svg";
const HomeHeader = () => {
  return (
    <header className={style.header}>
      <div className={style.icon}><img src={MenuIcon} alt="메뉴 아이콘" /></div>
      <div className={style.logo}><img src={TextLogo} alt="로고" /></div>
      <div className={style.icon}><img src={BookIcon} alt="선호책 아이콘" /></div>
    </header>
  )
};

export default HomeHeader;