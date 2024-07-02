// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import AppStyle from "../../App.module.css";
import styles from "./DropdownMenu.module.css";
import DownArrow from "../../assets/img/menu/arrow/arrow_down.svg";

const DropdownMenu = ({ className }) => {
  const [selectedOption, setSelectedOption] = useState("인기순");
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    // 필터링 또는 정렬 로직을 여기에 추가
    console.log(`Selected option: ${option}`);
  };

  const options = ["인기순", "최신순"];

  return (
    <div className={`${AppStyle.Caption2} ${styles.dropdown} ${className}`}>
      <button className={`${AppStyle.Caption1} ${styles.dropdownToggle}`} onClick={toggleDropdown}>
        {selectedOption}
        <span className={styles.icon}>
          <img src={DownArrow} alt="드롭다운 필터정렬 메뉴" />
        </span>
      </button>
      {isOpen && (
        <ul className={`${AppStyle.Caption1} ${styles.dropdownMenu}`}>
          {options.map((option) => (
            <li
              key={option}
              className={styles.dropdownMenuItem}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;
