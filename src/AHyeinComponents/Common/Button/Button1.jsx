/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import styles from "./Button.module.css";

export default function Button1() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };



  return (
    <button
      className={`${styles.Button1} ${clicked ? styles.clicked1 : ""}`}
      onClick={handleClick}
     
    >
      Button
    </button>
  );
}
