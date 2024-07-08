import style from "./BookSearchList.module.css";
import AppStyle from "../../App.module.css";
import BookImg from "../../assets/img/book/book3.png"

const BookSearchList = ({ book }) => {
  // book 객체가 정의되지 않았거나 cover 속성이 없는 경우 기본 값을 사용합니다.
  const coverImage = book?.cover || BookImg; // 기본 이미지 URL을 여기에 입력
  const title = book?.title || "제목 없음";
  const author = book?.author || "저자 미상";
  const description = book?.description || "설명이 없습니다.";

  return (
    <div className={style.container}>
      <div className={style.list_container}>
        <img className={style.BookImg} src={coverImage} alt={title} />
        <div className="caption">
          <div
            style={{ color: "var(--text-deep)" }}
            className={AppStyle.subtitle2}
          >
            {title}
          </div>
          <div
            style={{ color: "var(--text-normal)" }}
            className={AppStyle.Boby4}
          >
            {author}
          </div>
          <div
            style={{ color: "var(--text-normal)" }}
            className={AppStyle.Caption1}
          >
            {description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookSearchList;
