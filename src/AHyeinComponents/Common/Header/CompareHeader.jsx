import style from "./CompareHeader.module.css";
import AppStyle from "../../App.module.css";
import LeftArrow from "../../assets/img/arrow_left.svg"
import CloseIcon from "../../assets/img/icon_close.svg";

const CompareHeader = () => {
  return (
    <header>
      <header className={style.header}>
        <div className={style.icon}>
          <img src={LeftArrow} alt="왼쪽 화살표 아이콘" />
        </div>
        <div className={AppStyle.subtitle2}>도서 비교하기</div>
        <div className={style.icon}>
          <img src={CloseIcon} alt="선호책 아이콘" />
        </div>
      </header>
    </header>
  );
};

export default CompareHeader;
