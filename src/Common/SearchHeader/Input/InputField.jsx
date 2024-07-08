import { useEffect, useState } from "react";
import styles from "./InputField.module.css";
import SearchIcon from "../../../assets/img/menu/icon_search.svg";
import {useNavigate} from "react-router-dom";

const InputField = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onClickSearch();
    }
  };

  const onClickSearch = () => {
    if (search !== "") {
      onSearch(search);
    }
  };

  const onSearch = () => {
    navigate("/SearchCard?search=" + search);
    location.reload();
  }

  return (
  
      <div className={styles.Wrapper}>
        <div className={styles.SearchContainer}>
          <input
            className={styles.SearchBar}
            value={search}
            onKeyDown={onKeyDown}
            onChange={onChangeSearch}
            placeholder="제목/저자를 입력해주세요!"
          />
          <button className={styles.SearchButton} onClick={onClickSearch}>
            <img src={SearchIcon} alt="검색 아이콘" />
          </button>
        </div>
      </div>

  );
};

export default InputField;