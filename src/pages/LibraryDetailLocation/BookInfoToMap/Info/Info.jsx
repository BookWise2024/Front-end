import style from './Info.module.css';
import AppStyle from '../../../../App.module.css';
// ============================================
import location_img from '../../../../assets/img/map/icon_location_black.svg';
import calandar_img from '../../../../assets/img/map/icon_calendar.svg';
import home_img from '../../../../assets/img/map/icon_home.svg';
import App from "../../../../App.jsx";

export default function Info() {

    const info = [];
    const infoList = [
        { img: location_img, info: '서울 서초구 반포대로 201' },
        { img: calandar_img, info: '매달 2, 4번째 월요일 / 법정공휴일'},
        { img: home_img, info: 'https://www.nl.go.kr/'}
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