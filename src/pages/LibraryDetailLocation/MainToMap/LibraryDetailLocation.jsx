import {useLocation} from "react-router-dom";

import layout from './Layout.module.css';

import Header from './Header/Header.jsx';
import Photo from "./Photo/Photo.jsx";
import Info from './Info/Info.jsx';

export default function LibraryDetailLocation() {

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    // api/library/{libraryId} 에 필요
    const libraryId = searchParams.get('libraryId');
    console.log(libraryId);

    return (
        <div className={ layout.layout }>
            <Header/>
            <Photo/>
            <Info libraryId = { libraryId }/>
        </div>
    );
}