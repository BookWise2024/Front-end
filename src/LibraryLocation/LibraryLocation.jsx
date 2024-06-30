import React, { } from 'react';
// ==========================================
import Header from './Header/Header.jsx';
import Search from './Search/SearchBar.jsx';
import Map from './Map/KakaoMap.jsx';
import Library from './Library/Library.jsx';
// ==========================================
import layout from '../Common/TestLayout.module.css'

export default function LibraryLocation() {

    return (
        <div className={ layout.layout }>
            <Header/>
            <Search/>
            <Map/>
            {/*<Library/>*/}
        </div>
    )
}