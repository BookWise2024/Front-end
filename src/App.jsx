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
import SearchResult from "./pages/Search/SearchResult/SearchResult.jsx";
import DropdownMenu from "./Common/Dropdown/DropdownMenu.jsx";
import SearchNotFound from "./pages/Search/SearchNotFound/SearchNotFound.jsx";
import BookSearchList from "./Common/Book/BookSearchList.jsx";
import SearchDetailHeader from "./pages/Search/SearchDetail/Header/SearchDetailHeader.jsx";
import BookList from "./Common/Book/BookList.jsx";
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
                {/* 메인에서 도서관 검색으로 넘어간 페이지 */}
                <Route path = "/mainLib" element={<MainLibSearch />}/>
                {/* 도서 상세 페이지에서 도서관 검색으로 넘어간 페이지 */}
                <Route path = "/bookInfoLib" element={<BookInfoLibSearch />}/>
                {/* 메인에서 도서관 검색으로 넘어가서 도서관 상세로 넘어간 페이지 */}
                <Route path = "/MainLibInfo" element={<MainLibDetailLocation />}/>
                {/* 도서 상세 페이지에서 도서관 검색으로 넘어가서 도서관 상세로 넘어간 페이지 */}
                <Route path = "/BookInfoLibInfo" element={<BookInfoLibDetailLocation />}/>
                {/* 선호책 페이지 */}
                <Route path="/BookLike" element={<BookLike />}  />
                {/* 리뷰 컴포넌트 */}
                <Route path = "/review" element={<Review />}/>
                {/* ====================================================================== */}

                <Route path="/BookList" element={<BookList />} />
                <Route path="/SearchDetailHeader" element={<SearchDetailHeader />} />
                <Route path="/BookSearchList" element={<BookSearchList />} />
                <Route path="/SearchNotFound" element={<SearchNotFound />} />
                <Route path="/DropdownMenu" element={<DropdownMenu />} />
                <Route path="/SearchResult" element={<SearchResult />} />
                <Route path="/SearchDetail" element={<SearchDetail />} />

                <Route path="/SearchCard" element={<SearchCard />}  />
                <Route path="/AladinSearch" element={<AladinSearch />}  />
                <Route path="*" element={<NotFound />} />
                

            </Routes>
            {/* <HomeHeader /> */}
            {/* <CompareHeader /> */}

        </>
    </>
  )
}

export default App
