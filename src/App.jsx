import { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import axios from 'axios';
import './App.css'
import './App.module.css'
import Login from './Login/Login.jsx';
import MainPage from './MainPage/MainPage.jsx';
import Callback from './Login/Callback.jsx';
import SubMenu from './HambergerMenu/SubMenu.jsx';
import LibrarySearch from './LibraryLocation/LibraryLocation.jsx';
import Review from './Review/Review.jsx';

function App() {

  return (
    <>
      <ul>
        <li><Link to = "/login">Kakao Login</Link></li>
        <li><Link to = "/">Main Page</Link></li>
        <li><Link to = "/sub">Hamberger Menu</Link></li>
        <li><Link to= "/library">Library Map</Link></li>
        <li><Link to = "/review">Review Page</Link></li>
      </ul>
      <Routes>
        <Route path = "/login" element={<Login />}/>
        <Route path = "/auth/kakao/callback" element={<Callback />}/>
        <Route path = "/" element={<MainPage />}/>
        <Route path = "/sub" element={<SubMenu />}/>
        <Route path = "/library" element={<LibrarySearch />}/>
        <Route path = "/review" element={<Review />}/>
      </Routes>

      <h1>Vite + React {/* {member} */} </h1>

    </>
  )
}

export default App
