import React, { useEffect, useState } from 'react';
import axios from 'axios';
// ==========================================
import Header from './Header/Header.jsx';
import Search from './Search/SearchBar.jsx';
import Map from './Map/KakaoMap.jsx';
import Library from './Library/Library.jsx';
import { GetUserLocation } from './GetUserLocation.jsx';
// ==========================================
import layout from '../../../Common/TestLayout.module.css'

export default function LibraryLocation() {

    // 지도 중심 좌표를 상태로 관리(default = 서울 시청)
    const [userLocation, setUserLocation] = useState({ lat: 37.5665, lng: 126.9780 });

    // 위치 기반 도서관 정보 조회 결과값 받기
    const [aroundLib, setAroundLib] = useState([]);

    // 사용자 현재 위치 파악 -> from GetUserLocation.jsx
    useEffect(() => {
        // 성공적으로 정보를 가져왔을 경우의 location
        const handleLocationSuccess = (location) => {
            setUserLocation(location);
        };

        // 정보를 가져오는데 실패했을 경우의 location
        const handleLocationError = (defaultLocation) => {
            setUserLocation(defaultLocation);
        };

        GetUserLocation(handleLocationSuccess, handleLocationError);

        const around = async() => {
            const res = await axios.get("http://43.203.74.198:8000/api/library?latitude="
                + userLocation.lat + "&longitude=" + userLocation.lat);

            console.log(res.data);
            setAroundLib(res.data);
        }

        around();
    },[]);

    // 정보 나루 api에서 도서관 정보(319개) 리스트로 가져오기
    // useEffect(() => {
    //     // 호이스팅
    //     LibraryLoc();
    // },[]);

    // jungbonaru library api key & URL
    // const jungbonaru_api_key = "ff319884fdb9bb83c452d9c202b01c1a5c1e9e9e04030d785bbdec6aaa16e638";
    // const libraryUrl = "http://data4library.kr/api/libSrch?authKey=" + jungbonaru_api_key + "&format=json";

    // 도서관 리스트
    // const [libraryList, setLibraryList] = useState([]);

    // 정보나루 도서관 api
    // const LibraryLoc = async() => {
    //     const res = await axios.get(libraryUrl + '&pageSize=319');
    //     const jsonData = res.data;
    //
    //     console.log(jsonData.response.libs);
    //     setLibraryList(jsonData.response.libs);
    // }

    return (
        <div className={ layout.layout }>
            <Header/>
            <Search/>
            <Map userLocation = { userLocation } aroundLib = { aroundLib } />
            <Library userLocation = { userLocation } aroundLib = { aroundLib } />
        </div>
    )
}