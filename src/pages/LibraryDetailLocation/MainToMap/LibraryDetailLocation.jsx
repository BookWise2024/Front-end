import {useLocation} from "react-router-dom";

// import layout from '../../../Common/TestLayout.module.css';
import Layout from "../../../Common/Layout/Layout.jsx";
import style from "../../LibraryDetailLocation/MainToMap/LibraryDetail.module.css"
import Header from './Header/Header.jsx';
import Photo from "./Photo/Photo.jsx";
import Info from './Info/Info.jsx';

export default function LibraryDetailLocation() {

    const location = useLocation();
    const { state } = location;

    console.log(state);

    return (
          <Layout>
            <div className={style.Library_detail_container}>
              <Header/>
              <Photo/>
              <Info/>
            </div>
          </Layout>
    );
}