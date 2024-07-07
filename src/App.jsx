import { Route, Routes, Link } from 'react-router-dom'
import './App.module.css'
import KakaoLogin from './pages/Login/KakaoLogin.jsx';
import MainPage from './pages/MainPage/MainPage.jsx';
import Callback from './pages/Login/Callback.jsx';
import SubMenu from './components/HambergerMenu/SubMenu.jsx';
import MainLibSearch from './pages/LibraryLocation/MainToMap/LibraryLocation.jsx';
import BookInfoLibSearch from './pages/LibraryLocation/BookInfoToMap/LibraryLocation.jsx';
import MainLibDetailLocation from "./pages/LibraryDetailLocation/MainToMap/LibraryDetailLocation.jsx";
import BookInfoLibDetailLocation from "./pages/LibraryDetailLocation/BookInfoToMap/LibraryDetailLocation.jsx";
import BookLike from "./pages/BookLike/BookLike.jsx";
import Review from './Review/Review.jsx';

// =============================================================================================
import NotFound from "./pages/NotFound/NotFound.jsx";
import AladinSearch from "./API/Aladin/AladinSearch.jsx";
import SearchCard from "./pages/Search/SearchCard/SearchCard.jsx";
import SearchDetail from "./pages/Search/SearchDetail/SearchDetail.jsx";
 
import DropdownMenu from "./Common/Dropdown/DropdownMenu.jsx";
import SearchNotFound from "./pages/Search/SearchNotFound/SearchNotFound.jsx";
import BookSearchList from "./Common/Book/BookSearchList.jsx";
import SearchDetailHeader from "./pages/Search/SearchDetail/Header/SearchDetailHeader.jsx";
import BookList from "./Common/Book/BookList.jsx";
// import useAladinBookDetail from './API/Aladin/useAladinBookDetail.jsx';
import BookDetailTestPage from './API/Aladin/BookDetailTestPage.jsx';
 

function App() {
  
  return (
      <>
        <>
            <Routes>
                {/* 로그인 페이지 */}
                <Route path = "/login" element={<KakaoLogin/>}/>
                {/* 로그인 리다이렉트 콜백 페이지 */}
                <Route path = "/auth/kakao/callback" element={<Callback />}/>
                {/* 메인 페이지 */}
                <Route path = "/" element={<MainPage />}/>
                {/* 햄버거 메뉴 페이지 */}
                <Route path = "/sub" element={<SubMenu />}/> 
                {/* 햄버거 메뉴에서 도서관 검색으로 넘어간 페이지 */}
                <Route path = "/mainLib" element={<MainLibSearch />}/>
                {/* 도서 상세 페이지에서 도서관 검색으로 넘어간 페이지 */}
                <Route path = "/bookInfoLib" element={<BookInfoLibSearch />}/>
                {/* 메인에서 도서관 검색으로 넘어가서 도서관 상세로 넘어간 페이지 */}
                <Route path = "/MainLibInfo" element={<MainLibDetailLocation />}/>
                {/* 도서 상세 페이지에서 도서관 검색으로 넘어가서 도서관 상세로 넘어간 페이지 */}
                <Route path = "/BookInfoLibInfo" element={<BookInfoLibDetailLocation />}/>
                {/* 선호책 페이지 */}
                <Route path="/BookLike" element={<BookLike />}  />
               
                {/* ====================================================================== */}

                <Route path="/BookList" element={<BookList />} />
                <Route path="/SearchDetailHeader" element={<SearchDetailHeader />} />
                <Route path="/BookSearchList" element={<BookSearchList />} />
                <Route path="/SearchNotFound" element={<SearchNotFound />} />
                <Route path="/DropdownMenu" element={<DropdownMenu />} />




                {/* 혜인 */}
                {/* 컴포넌트 */}
                <Route path="/BookList" element={<BookList />} />
                <Route path="/SearchDetailHeader" element={<SearchDetailHeader />} /> {/* 도서 상세 페이지 헤더 */}
                <Route path="/BookSearchList" element={<BookSearchList />} />  {/* 책 검색결과 카드형 리스트 */}

                <Route path="/DropdownMenu" element={<DropdownMenu />} />



                {/* 검색 페이지 */}

                <Route path="/SearchCard" element={<SearchCard />}  /> {/* 검색 카드형 */}
                {/* <Route path="/SearchDetail" element={<SearchDetail />} /> 책 상세페이지 */}


                <Route path="/BookLike" element={<BookLike />}  /> {/* 선호책 리스트 페이지 */}
                <Route path="*" element={<NotFound />} /> {/* 에러 페이지 */}

                {/* 알라딘 테스트 페이지 */}
                {/* <Route path="/AladinSearch" element={<AladinSearch />}  /> */}

                {/* 알라딘 북 상세 테스트 페이지 */}
                <Route path="/SearchDetail" element={<SearchDetail />}  />

                {/* 알라딘 상세페이지 테스트 */}
                <Route path="/BookDetailTestPage" element={<BookDetailTestPage />} />

            </Routes>
       

        </>
    </>
  )
}

export default App
