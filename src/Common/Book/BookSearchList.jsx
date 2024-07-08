import { useNavigate } from "react-router-dom";
import style from "./BookSearchList.module.css";
import AppStyle from "../../App.module.css";
import BookImg from "../../assets/img/book/book3.png";

const BookSearchList = ({ book }) => {
  const navigate = useNavigate();

  const coverImage = book?.cover || BookImg;
  const title = book?.title || "제목 없음";
  const author = book?.author || "저자 미상";
  const description = book?.description || "설명이 없습니다.";

  const handleClick = () => {
    navigate(`/SearchDetail?isbn13=${book.isbn13}`);
  };

  return (
    <div className={style.container} onClick={handleClick}>
      <div className={style.list_container}>
        <img className={style.BookImg} src={coverImage} alt={title} />
        <div className="caption">
          <div style={{ color: "var(--text-deep)" }} className={AppStyle.subtitle2}>
            {title}
          </div>
          <div style={{ color: "var(--text-normal)" }} className={AppStyle.Boby4}>
            {author}
          </div>
          <div style={{ color: "var(--text-normal)" }} className={AppStyle.Caption1}>
            {description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookSearchList;
