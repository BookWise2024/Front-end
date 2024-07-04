import {useNavigate} from "react-router-dom";
// ==========================================
import style from './Library.module.css';
import AppStyle from '../../../../App.module.css';
// ==========================================
import DropDown from '../../../../Common/Dropdown/DropdownMenu.jsx';
// ==========================================
import loc from '../../../../assets/img/map/icon_location_gray.svg';

export default function Library({ userLocation, aroundLib }) {

    const navigate = useNavigate();
    // 주변 도서관 정보 표시
    const libList = [];

    function Info(libraryId) {
        navigate("/api/library/" + { libraryId });
    }

    for(let i = 0; i < aroundLib.length; i++){
        libList.push(
            <>
                <div className={style.libraryInfo} onClick={ Info(aroundLib[i].libraryId) }>
                    <div className={`${AppStyle.Body1} ${style.libraryName}`}>
                        { aroundLib[i].name }
                    </div>
                    <div className={style.libraryLoc}>
                        <div className={`${AppStyle.Body4} ${style.address}`}>
                            { aroundLib[i].address }
                        </div>
                        <div className={`${AppStyle.Caption2} ${style.distance}`}>
                            { aroundLib[i].distance }
                        </div>
                    </div>
                </div>
            </>
        );
    }

    return (
        <>
            <div className={`${style.text} ${AppStyle.subtitle1}`}>
                근처 공공도서관 정보
            </div>
            <div className={style.divide}></div>
            <div className={style.locInfo}>
                <div className={style.loc}>
                    <div className={style.icon}>
                        <img src={loc}/>
                    </div>
                    <div className={AppStyle.Body4}>Location</div>
                </div>
                <DropDown/>
            </div>
            <div className={style.librarys}>
                { libList }
            </div>
        </>
    )
}