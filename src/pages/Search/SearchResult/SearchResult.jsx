// eslint-disable-next-line no-unused-vars
import style from "./SearchResult.module.css";

import DropdownMenu from "../../../Common/Dropdown/DropdownMenu.jsx";
import AppStyle from "../../../App.module.css";

const SearchResult = ({searchTerm}) => {
  return (
    
      
      <div className={style.searchResult}>
        <span className={style.resultMessage}>
          <span className={`${AppStyle.Body4} ${style.searchTerm}`}>
            ‘{searchTerm}’&nbsp;
          </span>
          <span className={`${AppStyle.Body4} ${style.searchMessage}`}>
            검색결과
          </span>
        </span>
     
      </div>
   
  );

  
};




export default SearchResult;
