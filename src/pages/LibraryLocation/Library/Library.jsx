import style from './Library.module.css';
import AppStyle from '../../../App.module.css';
// ==========================================
import DropDown from '../../../Common/Dropdown/DropdownMenu.jsx';
// ==========================================
import loc from '../../../assets/img/map/icon_location_gray.svg';

export default function Library() {

    return (
        <>
            <div className={ `${style.text} ${AppStyle.subtitle1}` }>
                근처 공공도서관 정보
            </div>
            <div className={ style.divide }></div>
            <div className={ style.locInfo }>
                <div className={ style.loc }>
                    <div className={ style.icon }>
                        <img src={ loc }/>
                    </div>
                    <div className={ AppStyle.Body4 }>노원구 월계동</div>
                </div>
                <DropDown/>
            </div>
            <div className={ style.librarys }>
                <div className={ style.libraryInfo }>
                    <div className={ `${ AppStyle.Body1 } ${ style.libraryName }` }>
                        도서관 명
                    </div>
                    <div className={ style.libraryLoc }>
                        <div className={ `${ AppStyle.Body4 } ${ style.address }` }>
                            주소
                        </div>
                        <div className={ `${ AppStyle.Caption2 } ${ style.distance }` }>
                            1km
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}