import { Route, Routes, Link } from 'react-router-dom'
import './App.module.css'
import KakaoLogin from './pages/Login/KakaoLogin.jsx';
import MainPage from './pages/MainPage/MainPage.jsx';
import Callback from './pages/Login/Callback.jsx';
import SubMenu from './components/HambergerMenu/SubMenu.jsx';
import LibrarySearch from './pages/LibraryLocation/LibraryLocation.jsx';
import LibraryDetailLocation from "./pages/LibraryDetailLocation/MainToMap/LibraryDetailLocation.jsx";
import Review from './Review/Review.jsx';

// =============================================================================================
import NotFound from "./pages/NotFound/NotFound.jsx";
import BookLike from "./pages/BookLike/BookLike.jsx";
import AladinSearch from "./components/Aladin/AladinSearch.jsx";
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
            <ul>
                <li><Link to="/login">Kakao Login</Link></li>
                <li><Link to="/">Main Page</Link></li>
                <li><Link to="/sub">Hamberger Menu</Link></li>
                <li><Link to="/library">Library Map</Link></li>
                <li><Link to="/libraryInfo">Library Detail</Link></li>
                <li><Link to="/review">Review Page</Link></li>
            </ul>
            <Routes>
                <Route path="/login" element={<KakaoLogin />}/>
                <Route path = "/auth/kakao/callback" element={<Callback />}/>
                <Route path = "/" element={<MainPage />}/>
                <Route path = "/sub" element={<SubMenu />}/>
                <Route path = "/library" element={<LibrarySearch />}/>
                <Route path = "/libraryInfo" element={<LibraryDetailLocation />}/>
                <Route path = "/review" element={<Review />}/>
            </Routes>
        </>
        <>
            <Routes>

                <Route path="/BookList" element={<BookList />} />
                <Route path="/SearchDetailHeader" element={<SearchDetailHeader />} />
                <Route path="/BookSearchList" element={<BookSearchList />} />
                <Route path="/SearchNotFound" element={<SearchNotFound />} />
                <Route path="/DropdownMenu" element={<DropdownMenu />} />
                <Route path="/SearchResult" element={<SearchResult />} />
                {/*<Route path="/SearchDetail" element={<SearchDetail />} /> */}

                <Route path="/SearchCard" element={<SearchCard />}  />
                <Route path="/AladinSearch" element={<AladinSearch />}  />
                <Route path="/BookLike" element={<BookLike />}  />
                <Route path="*" element={<NotFound />} />


            </Routes>
            {/* <HomeHeader /> */}
            {/* <CompareHeader /> */}

        </>
    </>
  )
}

export default App
