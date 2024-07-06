import React, { useState, useEffect } from 'react';
import axios from 'axios';
// ==========================================
import style from './Map.module.css';
// ==========================================
const { kakao } = window;

export default function KakaoMap(props) {
    // kakao map api key & URL
    const kakao_map_api_key = 'c69f1af4f87c934b25688caca0f813d0';
    const url = 'https://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=' + kakao_map_api_key + '&libraries=services,clusterer,drawing';

    const userLocation = props.userLocation;
    const aroundLib = props.aroundLib;
    // console.log(aroundLib);
    // console.log(userLocation);

    useEffect(() => {
        // console.log(aroundLib);

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
                const map = new window.kakao.maps.Map(container, options);

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

                // console.log(userLocation);
                // console.log(aroundLib);
                // console.log(aroundLib.length);

                // 각 도서관 위치에 마커 표시
                for (let i = 0; i < aroundLib.length; i++) {
                    const position = new window.kakao.maps.LatLng(aroundLib[i].latitude, aroundLib[i].longitude);
                    const content = `<div style="padding:5px;">${aroundLib[i].name}</div>`;

                    const libMarker = new window.kakao.maps.Marker({
                        map: map,
                        position: position,
                    });

                    const libInfoWindow = new window.kakao.maps.InfoWindow({
                        content: content,
                    });

                    window.kakao.maps.event.addListener(libMarker, 'mouseover', () => libInfoWindow.open(map, libMarker));
                    window.kakao.maps.event.addListener(libMarker, 'mouseout', () => libInfoWindow.close());
                }
            });
        };

        script.onerror = () => {
            console.error('Failed to load the Kakao map script.');
        };

        // 스크립트가 언마운트 될 때 메모리 누수 방지
        return () => {
            if (document.head.contains(script)) {
                document.head.removeChild(script);
            }
        };
    }, [url, userLocation, aroundLib]);

    // function setLoc(map, lat, lng) {
    //     // 이동할 위도 경도 위치를 생성합니다
    //     let moveLatLon = new kakao.maps.LatLng(lat, lng);
    //
    //     // 지도 중심을 이동 시킵니다
    //     map.setCenter(moveLatLon);
    // }

    return (
        <>
            <div id='map' className={ style.map }></div>
        </>
    )
}