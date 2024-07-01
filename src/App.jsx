import { Route, Routes, Link } from 'react-router-dom'
import './App.module.css'
import Login from './Login/Login.jsx';
import MainPage from './MainPage/MainPage.jsx';
import Callback from './Login/Callback.jsx';
import SubMenu from './HambergerMenu/SubMenu.jsx';
import LibrarySearch from './LibraryLocation/LibraryLocation.jsx';
import Review from './Review/Review.jsx';
import HomeHeader from "./Common/SearchHeader/Header/HomeHeader.jsx";
import BookList from "./AHyeinComponent/Common/Book/BookList.jsx";
import SearchDetailHeader from "./AHyeinComponent/pages/Search/SearchDetail/Header/SearchDetailHeader.jsx";
import BookSearchList from "./AHyeinComponent/Common/Book/BookSearchList.jsx";
import SearchNotFound from "./AHyeinComponent/pages/Search/SearchNotFound/SearchNotFound.jsx";
import DropdownMenu from "./AHyeinComponent/Common/Dropdown/DropdownMenu.jsx";
import SearchResult from "./AHyeinComponent/pages/Search/SearchResult/SearchResult.jsx";
import SearchDetail from "./AHyeinComponent/pages/Search/SearchDetail/SearchDetail.jsx";
import SearchHeader from "./Common/SearchHeader/SearchHeader.jsx";
import InputField from "./Common/SearchHeader/Input/InputField.jsx";
import SearchCard from "./AHyeinComponent/pages/Search/SearchCard/SearchCard.jsx";
import AladinSearch from "./AHyeinComponent/components/Aladin/AladinSearch.jsx";
import BookLike from "./AHyeinComponent/pages/BookLike/BookLike.jsx";
import NotFound from "./AHyeinComponent/pages/NotFound/NotFound.jsx";

function App() {

  return (
      <>
        {/*<>*/}
        {/*  <ul>*/}
        {/*    <li><Link to = "/login">Kakao Login</Link></li>*/}
        {/*    <li><Link to = "/">Main Page</Link></li>*/}
        {/*    <li><Link to = "/sub">Hamberger Menu</Link></li>*/}
        {/*    <li><Link to= "/library">Library Map</Link></li>*/}
        {/*    <li><Link to = "/review">Review Page</Link></li>*/}
        {/*  </ul>*/}
        {/*  <Routes>*/}
        {/*    <Route path = "/login" element={<Login />}/>*/}
        {/*    <Route path = "/auth/kakao/callback" element={<Callback />}/>*/}
        {/*    <Route path = "/" element={<MainPage />}/>*/}
        {/*    <Route path = "/sub" element={<SubMenu />}/>*/}
        {/*    <Route path = "/library" element={<LibrarySearch />}/>*/}
        {/*    <Route path = "/review" element={<Review />}/>*/}
        {/*  </Routes>*/}
        {/*</>*/}
        <>
            <Routes>
                <Route path="/HomeHeader" element={<HomeHeader />} />

                <Route path="/BookList" element={<BookList />} />
                <Route path="/SearchDetailHeader" element={<SearchDetailHeader />} />
                <Route path="/BookSearchList" element={<BookSearchList />} />
                <Route path="/SearchNotFound" element={<SearchNotFound />} />
                <Route path="/DropdownMenu" element={<DropdownMenu />} />
                <Route path="/SearchResult" element={<SearchResult />} />
                <Route path="/SearchDetail" element={<SearchDetail />} />
                <Route path="/SearchHeader" element={<SearchHeader />} />
                <Route path="/InputField" element={<InputField />}  />
                <Route path="/SearchCard" element={<SearchCard />}  />
                <Route path="/AladinSearch" element={<AladinSearch />}  />
                <Route path="/BookLike" element={<BookLike />}  />
                <Route path="/HomeHeader" element={<HomeHeader />}  />
                <Route path="*" element={<NotFound />} />


            </Routes>
            {/* <HomeHeader /> */}
            {/* <CompareHeader /> */}

        </>
    </>
  )
}

export default App
