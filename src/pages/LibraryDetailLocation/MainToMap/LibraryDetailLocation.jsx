import {useLocation} from "react-router-dom";

import Layout from "../../../Common/Layout/Layout.jsx";
import style from "../../LibraryDetailLocation/MainToMap/LibraryDetail.module.css"
import Header from './Header/Header.jsx';
import Photo from "./Photo/Photo.jsx";
import Info from './Info/Info.jsx';

export default function LibraryDetailLocation() {

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    // api/library/{libraryId} 에 필요
    const libraryId = searchParams.get('libraryId');
    const latitude = searchParams.get('latitude');
    const longitude = searchParams.get('longitude');

    const libCenter = { lat : latitude , lng : longitude }
    console.log(libraryId);
    console.log(libCenter);

    return (
      <Layout>
          <div className={style.Library_detail_container}>
            <Header/>
            <Photo libCenter = { libCenter } />
            <Info libraryId = { libraryId }/>
          </div>
      </Layout>
    );
}