// eslint-disable-next-line no-unused-vars
import style from "./SearchDetail.module.css";
import AppStyle from "../../../App.module.css";
import Layout from "../../../Common/Layout/Layout.jsx"; // 주석 해제
// import Header from "../HomeHeader.jsx";
import BookList from "../../../Common/Book/BookList.jsx";
import BookActions from "../../../Common/Book/BookActions.jsx";
import DetailHeader from "../../../pages/Search/SearchDetail/SearchDetail.jsx";


const SearchDetail = () => {
  // 텍스트 스타일 정리 아직 
  return (
    <Layout>
      <DetailHeader />
      <div className={AppStyle.title1}>해리포터 : 죽음의 성물</div>
      <div className={AppStyle.Body4}>Rowling, J . K.</div>
      <div className={AppStyle.subtitle1}>상세 정보</div>
      <div className={AppStyle.Body1}>줄거리</div>
      <div className={AppStyle.Body1}>줄거리</div>

      <BookActions />
      <div>
        <BookList className={style.BookList} />
      </div>
    </Layout>
  );
};

export default SearchDetail;
