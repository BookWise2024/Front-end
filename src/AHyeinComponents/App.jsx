
import './App.module.css'


import { Routes, Route } from "react-router-dom";


import SearchNotFound from "./components/Search/SearchNotFound";

import NotFound from "./pages/NotFound/NotFound.jsx";

import BookSearchList from './Common/Book/BookSearchList';
import BookList from './Common/Book/BookList';
import  DropdownMenu from './Common/Dropdown/DropdownMenu';
import SearchDetail from './components/Search/SearchDetail';
import SearchHeader from './Common/Header/SearchHeader';
import InputField from './Common/Input/InputField';
import SearchCard from './components/Search/SearchCard';
import SearchResult from './components/Search/SearchResult';
import AladinSearch from './components/Aladin/AladinSearch';
// 동범님

import HomeHeader from "./Common/Header/HomeHeader";

import BookLike from "./pages/BookLikeList";
function App() {
  

  return (
    <>
      
      <Routes>
        <Route path="/HomeHeader" element={<HomeHeader />} />
   
        <Route path="/BookList" element={<BookList />} />
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
  )
}

export default App
