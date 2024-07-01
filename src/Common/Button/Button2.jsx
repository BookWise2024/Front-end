// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import styles from "./Button.module.css";

export default function Button2() {
  const [clicked, setClicked] = useState(false);


  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <button
      className={`${styles.Button2} ${clicked ? styles.clicked2 : ""}`}
      onClick={handleClick}
    >
      Button
    </button>
  );
}