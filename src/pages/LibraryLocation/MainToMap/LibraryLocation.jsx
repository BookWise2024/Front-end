import React, { useEffect, useState } from "react";
import axios from "axios";
// ==========================================
import Header from "./Header/Header.jsx";
import Search from "./Search/SearchBar.jsx";
import Map from "./Map/KakaoMap.jsx";
import Library from "./Library/Library.jsx";
import { GetUserLocation } from "./GetUserLocation.jsx";
import style from "./LibraryLocation.module.css"
// ==========================================

import Layout from "../../../Common/Layout/Layout.jsx";
export default function LibraryLocation() {
    // {lat: 37.566826, lng: 126.9786567}
    // 지도 중심 좌표를 상태로 관리(default = 서울 시청)
    const [userLocation, setUserLocation] = useState(null);

    // 위치 기반 도서관 정보 조회 결과값 받기
    const [aroundLib, setAroundLib] = useState([]);

    // 검색하기
    const [searchKeyword, setSearchKeyword] = useState("");

    // 검색어 업데이트 함수
    const handleSearch = (searchKeyword) => {
        setSearchKeyword(searchKeyword);
    };

    // userLocation에 검색한 위치 배치하기
    const handleLocationChange = (location) => {
        // 상태가 실제로 변경될 때만 업데이트
        if (userLocation?.lat !== location.lat || userLocation?.lng !== location.lng) {
            console.log('First Location:', location);
            setUserLocation(location);
            console.log(userLocation);
        }
    };

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

    // 해당 위치 중심으로 도서관 검색하기
    useEffect(() => {
        console.log(userLocation);
        const around = async() => {
            try {
                const res = await axios.get("http://43.203.74.198:8000/api/library?latitude="
                    + userLocation.lat + "&longitude=" + userLocation.lng);

                console.log(res.data);
                setAroundLib(res.data.libraryList);
            } catch(err) {
                console.error(err);
            }
        }
        if(userLocation) {
            around();
        }
    },[userLocation]);

    console.log(userLocation);
    console.log(aroundLib);

    return (
          <Layout>
            <div className={style.wrapper}>
              <Header/>
              <Search onSearch={ handleSearch } />
              {userLocation && aroundLib != [] ? (
                  <>
                      <Map userLocation={userLocation}
                          aroundLib={aroundLib}
                          searchKeyword={searchKeyword}
                          onLocationChange={ handleLocationChange }/>
                      <Library userLocation={userLocation}
                              aroundLib={aroundLib} />
                  </>
              ) : (
                  <p>Loading...</p>
              )}
                {/*<div id="map" style={{ width: "0px", height: "0px" }}></div>*/}
            </div>
        </Layout>
    )
}