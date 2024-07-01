import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// ------------------------------------------------------
import layout from '../Common/TestLayout.module.css'
import mainStyle from './MainPage.module.css'
import AppStyle from "../App.module.css";
// ------------------------------------------------------
import SearchHeader from "../Common/SearchHeader/SearchHeader.jsx";
import MainBookList from './BookList/MainBookList.jsx';
import SubBookList from './BookList/SubBookList.jsx';


export default function MainPage() {

    return (
        <div className={ layout.layout }>
            <SearchHeader/>
            <div className={mainStyle.container}>
                <MainBookList/>
                {/* <SubBookList/> */}
            </div>
        </div>
    );
};
