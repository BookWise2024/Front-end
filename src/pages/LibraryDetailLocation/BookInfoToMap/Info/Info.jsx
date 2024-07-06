import style from './Info.module.css';
import AppStyle from '../../../../App.module.css';
// ============================================
import location_img from '../../../../assets/img/map/icon_location_black.svg';
import calandar_img from '../../../../assets/img/map/icon_calendar.svg';
import home_img from '../../../../assets/img/map/icon_home.svg';
import App from "../../../../App.jsx";
import {useEffect,useState} from "react";
import axios from "axios";

export default function Info(props) {

    const libraryId = props.libraryId;
    const [library,setLibrary] = useState(null);

    useEffect(() => {
        const libInfo = async() => {
            const res = await axios.get('http://43.203.74.198:8000/api/library/' + libraryId);

            console.log(res.data);
            setLibrary(res.data);
        }
        libInfo();
    },[libraryId]);

    // library 값이 잘 set 되었는지 확인하기
    // => useEffect 실행전에 .address .opTime .url 부터 찾아서 비어있는 library에선 탐색 불가
    if (!library) {
        return <div>Library information not found.</div>;
    }

    const info = [];
    const infoList = [
        { img: location_img, info: library.address },
        { img: calandar_img, info: library.opTime },
        { img: home_img, info: library.url }
    ]

    for (let i = 0; i < infoList.length; i++) {
        info.push(
            <div className={ style.info }>
                <img className={ style.img } src={ infoList[i].img }/>
                <div className={ `${ AppStyle.Body2 } ${ style.detail }` }>
                    { infoList[i].info }
                </div>
            </div>
        );
    }

    return (
        <div className={ style.base }>
            <div className={ `${ AppStyle.subtitle1 } ${ style.title } ` }>도서관 정보</div>
            <div className={ style.infoList }>
                { info }
            </div>
        </div>
    );
}