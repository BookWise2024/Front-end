import style from "./BookSearchList.module.css";
import Book2 from "../../assets/img/book/book2.png";
import AppStyle from "../../App.module.css";

const BookSearchList = () => {
  return (
    <div className={style.container}>
      <div className={style.list_container}>
        <img className={style.BookImg} src={Book2} alt="책1" />
        <div className="caption">
          <div
            style={{ color: "var(--text-deep)" }}
            className={AppStyle.subtitle2}
          >
            해리포터: 죽음의 성물
          </div>
          <div
            style={{ color: "var(--text-normal)" }}
            className={AppStyle.Boby4}
          >
            Rowling J. K.
          </div>
          <div
            style={{ color: "var(--text-normal)" }}
            className={AppStyle.Caption1}
          >
            덤블도어 교장의 죽음 이후, 마법부는 죽음을 <br />
            먹는 자들에게 점령당하고 호그와트는 위기에 <br />
            빠진다.
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookSearchList;
