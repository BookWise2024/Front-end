import style from "./BookSearchList.module.css";
import AppStyle from "../../App.module.css";

const BookSearchList = ({ book }) => {
  return (
    <div className={style.container}>
      <div className={style.list_container}>
        <img className={style.BookImg} src={book.cover} alt={book.title} />
        <div className="caption">
          <div
            style={{ color: "var(--text-deep)" }}
            className={AppStyle.subtitle2}
          >
            {book.title}
          </div>
          <div
            style={{ color: "var(--text-normal)" }}
            className={AppStyle.Boby4}
          >
            {book.author}
          </div>
          <div
            style={{ color: "var(--text-normal)" }}
            className={AppStyle.Caption1}
          >
            {book.description || "설명이 없습니다."}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookSearchList;
