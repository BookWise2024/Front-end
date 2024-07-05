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

    // {lat: 37.566826, lng: 126.9786567}
    // 지도 중심 좌표를 상태로 관리(default = 서울 시청)
    const [userLocation, setUserLocation] = useState(null);

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

    },[]);

    useEffect(() => {
        const around = async() => {
            const res = await axios.get("http://43.203.74.198:8000/api/library?latitude="
                + userLocation.lat + "&longitude=" + userLocation.lng);

            console.log(res.data);
            setAroundLib(res.data.libraryList);
        }
        around();
    },[userLocation]);

    console.log(userLocation);
    console.log(aroundLib);

    return (
        <div className={ layout.layout }>
            <Header/>
            <Search/>
            {userLocation && aroundLib != [] ? (
                <>
                    <Map userLocation={userLocation} aroundLib={aroundLib} />
                    <Library userLocation={userLocation} aroundLib={aroundLib} />
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    )
}