import style from './Header.module.css';
import AppStyle from '../../../../App.module.css';
// ==========================================
import exitimg from '../../../../assets/img/menu/icon_close.svg';

export default function Header() {

    function back() {
        history.back();
    }

    return (
        <>
            <div className={ style.layout }>
                <div className={ `${ AppStyle.subtitle2 } ${ style.title }` }>
                    공공도서관 찾기
                </div>
                <div className={ style.exit } onClick={ back }>
                    <img src={ exitimg }/>
                </div>
            </div>
        </>
    );
}