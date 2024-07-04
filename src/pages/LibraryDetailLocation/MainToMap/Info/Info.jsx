import style from './Info.module.css';
import AppStyle from '../../../../App.module.css';
// ============================================
import location_img from '../../../../assets/img/map/icon_location_black.svg';
import calandar_img from '../../../../assets/img/map/icon_calendar.svg';
import home_img from '../../../../assets/img/map/icon_home.svg';
import App from "../../../../App.jsx";

export default function Info({state}) {

    const libraryList = state;
    console.log(state);

    const info = [];
    const infoList = [
        { img: location_img, info: libraryList },
        { img: calandar_img, info: libraryList },
        { img: home_img, info: libraryList }
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