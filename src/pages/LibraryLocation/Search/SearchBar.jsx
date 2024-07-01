import style from './Search.module.css';
// ==========================================
import searchimg from '../../../assets/img/menu/icon_search.svg';

export default function SearchBar() {

    return (
        <>
            <div className={ style.searchBar }>
                <div className={ style.input }>
                    <input className={ style.inputText } type="text" placeholder="도서관 검색"/>
                </div>
                <div className={ style.icon }>
                    <img src={ searchimg }/>
                </div>
            </div>
        </>
    );
}