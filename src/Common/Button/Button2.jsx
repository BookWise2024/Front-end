// eslint-disable-next-line no-unused-vars
// 책 상세 페이지 : 도서관 버튼으로 수정함.
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Button.module.css";

export default function Button2(props) {
  const isbn = props.isbn;
  const navigate = useNavigate();

  const [clicked, setClicked] = useState(false);


  const handleClick = () => {
    // setClicked(!clicked);
    navigate("/BookInfoLibInfo?isbn13=" + isbn);
  };

  return (
    <button
      className={`${styles.Button2} ${clicked ? styles.clicked2 : ""}`}
      onClick={handleClick}
    >
      도서관 검색
    </button>
  );
}