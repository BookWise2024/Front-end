import React, { useState, useEffect } from 'react';
import axios from 'axios';
// ==========================================
import style from './Map.module.css';
import { useLocation } from "react-router-dom";
// ==========================================
const { kakao } = window;

export default function KakaoMap(props) {
    // kakao map api key & URL
    const kakao_map_api_key = 'c69f1af4f87c934b25688caca0f813d0';
    const url = 'https://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=' + kakao_map_api_key + '&libraries=services,clusterer,drawing';

    const userLocation = props.userLocation;
    const aroundLib = props.aroundLib;
    const searchKeyword = props.searchKeyword;
    const onLocationChange = props.onLocationChange;

    // console.log(aroundLib);
    // console.log(userLocation);

    const [map, setMap] = useState(null);
    const [scriptLoaded, setScriptLoaded] = useState(false);

    useEffect(() => {
        // Kakao Map 스크립트를 동적으로 로드
        const script = document.createElement('script');
        script.src = url + "&autoload=false";
        script.async = true;
        document.head.appendChild(script);

        script.onload = () => {
            window.kakao.maps.load(() => {
                const container = document.getElementById('map');
                const options = {
                    // 위도, 경도
                    center: new window.kakao.maps.LatLng(userLocation.lat, userLocation.lng),
                    // 확대 축소 정도
                    level: 3,
                };
                const mapInstance = new window.kakao.maps.Map(container, options);
                setMap(mapInstance);
                // map이 정상적으로 마운트 되면 scriptLoaded가 true로 변환
                setScriptLoaded(true);
            });
        };

        script.onerror = () => {
            console.error('Failed to load the Kakao map script.');
        };

        return () => {
            if (document.head.contains(script)) {
                document.head.removeChild(script);
            }
        };
    }, [url]);

    useEffect(() => {
        // 지도가 마운트되지 않았을 때 실행 x
        if (!map || !scriptLoaded) return;

        // 현재 위치에 마커를 표시합니다.
        const marker = new window.kakao.maps.Marker({
            position: new window.kakao.maps.LatLng(userLocation.lat, userLocation.lng),
            title: '현재 위치',
        });
        marker.setMap(map);

        const infowindow = new window.kakao.maps.InfoWindow({
            content: '<div style="padding:5px 45px;">현재 위치</div>',
        });

        // 인포윈도우를 표시하는 클로저를 만드는 함수입니다
        window.kakao.maps.event.addListener(marker, 'mouseover', () => infowindow.open(map, marker));
        // 인포윈도우를 닫는 클로저를 만드는 함수입니다
        window.kakao.maps.event.addListener(marker, 'mouseout', () => infowindow.close());

        // 각 도서관 위치에 마커 표시
        aroundLib.forEach(lib => {
            const position = new window.kakao.maps.LatLng(lib.latitude, lib.longitude);
            const content = `<div style="padding:5px;">${lib.name}</div>`;

            const libMarker = new window.kakao.maps.Marker({
                map: map,
                position: position,
            });

            const libInfoWindow = new window.kakao.maps.InfoWindow({
                content: content,
            });

            window.kakao.maps.event.addListener(libMarker, 'mouseover', () => libInfoWindow.open(map, libMarker));
            window.kakao.maps.event.addListener(libMarker, 'mouseout', () => libInfoWindow.close());
        });
    }, [map, scriptLoaded, aroundLib, userLocation]);

    useEffect(() => {
        // map이 마운트되지 않고, 검색어가 없을경우 실행 x
        if (!map || !scriptLoaded || !searchKeyword) return;

        // 마커를 클릭하면 장소명을 표출할 인포윈도우입니다
        const searchInfoWindow = new window.kakao.maps.InfoWindow({ zIndex: 1 });
        // 장소 검색 객체를 생성합니다
        const ps = new window.kakao.maps.services.Places();

        // 키워드로 관련 장소 검색 후, 최상단 목록에 있는 요소만 바운드
        ps.keywordSearch(searchKeyword, (data, status, pagination) => {
            if (status === window.kakao.maps.services.Status.OK) {

                console.log(data);

                // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기 위해 LatLngBounds 객체에 좌표를 추가합니다
                const bounds = new window.kakao.maps.LatLngBounds();
                displayMarker(data[0]);
                bounds.extend(new window.kakao.maps.LatLng(data[0].y, data[0].x));

                // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
                map.setBounds(bounds);

                // 목록 최상단 요소
                const firstLocation = { lat: data[0].y, lng: data[0].x };
                console.log(firstLocation);

                // 바뀐 위치를 상위 컴포넌트로 전송
                onLocationChange(firstLocation);

            }
        });

        function displayMarker(place) {
            const marker = new window.kakao.maps.Marker({
                map: map,
                position: new window.kakao.maps.LatLng(place.y, place.x)
            });

            window.kakao.maps.event.addListener(marker, 'mouseover', () => {
                searchInfoWindow.setContent('<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>');
                searchInfoWindow.open(map, marker);
            });
            window.kakao.maps.event.addListener(marker, 'mouseout', () => searchInfoWindow.close());
        }
    }, [map, scriptLoaded, searchKeyword, onLocationChange]);

    return (
        <>
            <div id='map' className={style.map}></div>
        </>
    );
}
