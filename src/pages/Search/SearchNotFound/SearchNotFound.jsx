// eslint-disable-next-line no-unused-vars
import styles from "./SearchNotFound.module.css";
import AppStyle from "../../../App.module.css";
import SearchHeader from "../../../Common/SearchHeader/SearchHeader.jsx";
import Layout from "../../../Common/Layout/Layout.jsx";
import DropdownMenu from "../../../Common/Dropdown/DropdownMenu.jsx";

const SearchNotFound = () => {
  return (
    <Layout>
      <SearchHeader />
      {/* SearchResult 컴포넌트 필요 */}
      <div className={styles.searchResult}>
        <div className={styles.resultMessage}>
          <span className={`${AppStyle.Body4} ${styles.searchTerm}`}>
            ‘해리포터’&nbsp;
          </span>
          <span className={`${AppStyle.Body4} ${styles.searchMessage}`}>
            검색 결과를 찾을 수 없어요
          </span>
        </div>
        <DropdownMenu className={styles.DropdownMenu} />
        {/* 탭필터 구현 */}
      </div>
    </Layout>
  );
};

export default SearchNotFound;
