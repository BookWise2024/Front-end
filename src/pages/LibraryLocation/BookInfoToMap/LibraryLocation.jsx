import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {useLocation} from "react-router-dom";
// ==========================================
import Header from './Header/Header.jsx';
import Search from './Search/SearchBar.jsx';
import Map from './Map/KakaoMap.jsx';
import Library from './Library/Library.jsx';
import { GetUserLocation } from './GetUserLocation.jsx';
// ==========================================
// import layout from '../../../Common/TestLayout.module.css'
import Layout from "../../../Common/Layout/Layout.jsx"
export default function LibraryLocation() {

    const loc = useLocation();
    const searchParams = new URLSearchParams(loc.search);
    // /api/library/book/{bookId} 에 필요
    const bookId = searchParams.get('bookId');
    console.log(bookId);

    // {lat: 37.566826, lng: 126.9786567} - 서울 시청 위도 경도
    // 지도 중심 좌표를 상태로 관리(default = 서울 시청)
    const [userLocation, setUserLocation] = useState({lat: 37.566826, lng: 126.9786567});

    // 위치 기반 도서관 정보 조회 결과값 받기
    const [aroundLib, setAroundLib] = useState([]);

    // 사용자 현재 위치 파악 -> from GetUserLocation.jsx
    // useEffect(() => {
    //     // 성공적으로 정보를 가져왔을 경우의 location
    //     const handleLocationSuccess = (location) => {
    //         setUserLocation(location);
    //     };
    //
    //     // 정보를 가져오는데 실패했을 경우의 location
    //     const handleLocationError = (defaultLocation) => {
    //         setUserLocation(defaultLocation);
    //     };
    //     GetUserLocation(handleLocationSuccess, handleLocationError);
    //
    // },[]);

    useEffect(() => {
        const around = async() => {
            const res = await axios.get("http://43.203.74.198:8000/api/library?latitude="
                + userLocation.lat + "&longitude=" + userLocation.lng);
            // const res = await axios.get("http://43.203.74.198:8000/api/library/book/" + bookId
            //     + "?latitude=" + userLocation.lat + "&longitude=" + userLocation.lng + "&sort=possession");
            console.log(res.data);
            setAroundLib(res.data.libraryList);
        }
        around();
    },[userLocation]);

    console.log(userLocation);
    console.log(aroundLib);

    return (
      <Layout>
        <Header />
        <Search />
        {userLocation && aroundLib != [] ? (
          <>
            <Map userLocation={userLocation} aroundLib={aroundLib} />
            <Library
              userLocation={userLocation}
              aroundLib={aroundLib}
              bookId={bookId}
            />
          </>
        ) : (
          <p>Loading...</p>
        )}
      </Layout>
    );
}