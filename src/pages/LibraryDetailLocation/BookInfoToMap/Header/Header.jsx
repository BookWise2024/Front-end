import { useNavigate } from 'react-router-dom';
// ==========================================
import style from './Header.module.css';
import AppStyle from "../../../../App.module.css";
// ==========================================
import exitimg from '../../../../assets/img/menu/icon_close.svg';
import backimg from '../../../../assets/img/menu/arrow/arrow_left_black.svg';

export default function Header() {

    const navigate = new useNavigate();

    function back() {
        history.back();
    }
    function home() {
        navigate('/');
    }

    return (
        <>
            <div className={style.layout}>
                <div className={style.back} onClick={back}>
                    <img src={backimg}/>
                </div>
                <div className={ `${ AppStyle.subtitle2 } ${ style.title }` }>
                    공공도서관 찾기
                </div>
                <div className={style.exit} onClick={home}>
                    <img src={exitimg}/>
                </div>
            </div>
        </>
    );
}