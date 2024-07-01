import style from './Library.module.css';
// ==========================================
import loc from '../../../assets/img/map/icon_location.svg';

export default function Library() {

    return (
        <>
            <div className={ style.text }>
                근처 공공도서관 정보
            </div>
            <div className={ style.divide }></div>
            <div>
                <div>
                    <div></div>
                </div>
                <div></div>
            </div>
            <div>
                <div>도서관 명</div>
                <div>주소</div>
                <div>1km</div>
            </div>
        </>
    )
}