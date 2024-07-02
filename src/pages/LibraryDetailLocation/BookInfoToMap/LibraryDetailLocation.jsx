import layout from '../../../Common/TestLayout.module.css';

import Header from './Header/Header.jsx';
import Photo from "./Photo/Photo.jsx";
import Info from './Info/Info.jsx';

export default function LibraryDetailLocation() {

    return (
        <div className={ layout.layout }>
            <Header />
            <Photo/>
            <Info/>
        </div>
    );
}