import React from 'react';
import { Routes, Route } from 'react-router-dom';
import KakaoLogin from './pages/Login/KakaoLogin.jsx';
import MainPage from './pages/MainPage/MainPage.jsx';
import Callback from './pages/Login/Callback.jsx';
import SubMenu from './components/HambergerMenu/SubMenu.jsx';
import MainLibSearch from './pages/LibraryLocation/MainToMap/LibraryLocation.jsx';
import BookInfoLibSearch from './pages/LibraryLocation/BookInfoToMap/LibraryLocation.jsx';
import MainLibDetailLocation from './pages/LibraryDetailLocation/MainToMap/LibraryDetailLocation.jsx';
import BookInfoLibDetailLocation from './pages/LibraryDetailLocation/BookInfoToMap/LibraryDetailLocation.jsx';
import BookLike from './pages/BookLike/BookLike.jsx';
import NotFound from './pages/NotFound/NotFound.jsx';
import SearchCard from './pages/Search/SearchCard/SearchCard.jsx';
import SearchDetail from './pages/Search/SearchDetail/SearchDetail.jsx';
import BookList from './Common/Book/BookList.jsx';
import SearchDetailHeader from './pages/Search/SearchDetail/Header/SearchDetailHeader.jsx';
import BookSearchList from './Common/Book/BookSearchList.jsx';
import DropdownMenu from './Common/Dropdown/DropdownMenu.jsx';
import SearchNotFound from './pages/Search/SearchNotFound/SearchNotFound.jsx';
import BookDetailTestPage from './API/Aladin/BookDetailTestPage.jsx';

function App() {
  return (
    <Routes>
      {/* 로그인 페이지 */}
      <Route path="/login" element={<KakaoLogin />} />
      {/* 로그인 리다이렉트 콜백 페이지 */}
      <Route path="/auth/kakao/callback" element={<Callback />} />
      {/* 메인 페이지 */}
      <Route path="/" element={<MainPage />} />
      {/* 햄버거 메뉴 페이지 */}
      <Route path="/sub" element={<SubMenu />} />
      {/* 햄버거 메뉴 => 도서관 검색 페이지 */}
      <Route path="/mainLib" element={<MainLibSearch />} />
      {/* 도서 상세 페이지 => 도서관 검색 페이지 */}
      <Route path="/bookInfoLib" element={<BookInfoLibSearch />} />
      {/* 메인 => 도서관 검색 => 도서관 상세 페이지 */}
      <Route path="/MainLibInfo" element={<MainLibDetailLocation />} />
      {/* 도서 상세 페이지 => 도서관 검색 => 도서관 상세 페이지 */}
      <Route path="/BookInfoLibInfo" element={<BookInfoLibDetailLocation />} />
      {/* 선호책 페이지 */}
      <Route path="/BookLike" element={<BookLike />} />
      {/* ====================================================================== */}
      <Route path="/BookList" element={<BookList />} />
      <Route path="/SearchDetailHeader" element={<SearchDetailHeader />} />
      <Route path="/BookSearchList" element={<BookSearchList />} />
      <Route path="/SearchNotFound" element={<SearchNotFound />} />
      <Route path="/DropdownMenu" element={<DropdownMenu />} />
      {/* 검색 페이지 */}
      <Route path="/SearchCard" element={<SearchCard />} />
      <Route path="/SearchDetail" element={<SearchDetail />} />
      {/* 기타 페이지 */}
      <Route path="*" element={<NotFound />} />
      {/* 알라딘 북 상세 테스트 페이지 */}
      <Route path="/BookDetailTestPage" element={<BookDetailTestPage />} />
    </Routes>
  );
}

export default App;
