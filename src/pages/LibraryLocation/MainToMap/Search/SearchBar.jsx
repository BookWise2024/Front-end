import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from 'axios';
// ==========================================
import style from './Search.module.css';
// ==========================================
import searchimg from '../../../../assets/img/menu/icon_search.svg';

export default function SearchBar(props) {

    const [search, setSearch] = useState("");
    const nav = useNavigate();

    // 입력 필드의 값이 변경될 때 호출
    const onChangeSearch = (e) => {
        setSearch(e.target.value);
    };

    // 사용자가 키보드를 눌렀을 때 호출
    const onKeyDown = (e) => {
        if (e.keyCode === 13) { // 엔터 키 코드
            onClickSearch();
        }
    };

    // 검색 버튼을 클릭하거나 엔터 키를 눌렀을 때 호출
    const onClickSearch = () => {
        if (search !== "") {
            // searchlibrary(search);
            props.onSearch(search);
        }
    };

    return (
        <>
            <div className={ style.searchBar }>
                <div className={ style.input }>
                    <input className={ style.inputText }
                           type="text"
                           value={ search }
                           onKeyDown={ onKeyDown }
                           onChange={ onChangeSearch }
                           placeholder="도서관 검색"/>
                </div>
                <div className={ style.icon } onClick = { onClickSearch }>
                    <img src={ searchimg }/>
                </div>
            </div>
        </>
    );
}