import layout from '../../../Common/TestLayout.module.css';

import Header from './Header/Header.jsx';
import Photo from "./Photo/Photo.jsx";
import Info from './Info/Info.jsx';
import Layout from '../../../Common/Layout/Layout.jsx';
export default function LibraryDetailLocation() {

    return (
        <Layout>
            <Header />
            <Photo/>
            <Info/>
        </Layout> 
    );
}