import React, { useState, useEffect } from 'react';
import axios from 'axios';
// ==========================================
import style from './Map.module.css';
// ==========================================
const { kakao } = window;

export default function KakaoMap({ userLocation, libraryList }) {
    // kakao map api key & URL
    const kakao_map_api_key = 'c69f1af4f87c934b25688caca0f813d0';
    const url = 'https://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=' + kakao_map_api_key + '&libraries=services,clusterer,drawing';

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
                const map = new window.kakao.maps.Map(container, options);

                // 현재 위치에 마커를 표시합니다.
                const marker = new window.kakao.maps.Marker({
                    position: new window.kakao.maps.LatLng(userLocation.lat, userLocation.lng),
                    title: '현재 위치',
                });
                marker.setMap(map);

                const infowindow = new window.kakao.maps.InfoWindow({
                    content: '<div style="padding:5px;">현재 위치</div>',
                });
                infowindow.open(map, marker);

                // 각 도서관 위치에 마커 표시
                for(let i = 0; i < libraryList.length; i++) {
                    console.log(libraryList[parseInt(1)].lib.latitude);
                    console.log(libraryList[parseInt(1)].lib.longitude);
                    const positions = [
                        {
                            content: '<div style="padding:5px;">libraryList[i].lib.libName</div>',
                            latlng: new window.kakao.maps.LatLng(libraryList[i].lib.latitude, libraryList[i].lib.longitude)
                        }
                    ];

                    let marker = new window.kakao.maps.Marker({
                        map: map,                       // 마커를 표시할 지도
                        position: positions.latlng      // 마커의 위치
                    });

                    let infowindow = new window.kakao.maps.InfoWindow({
                        content: positions.content      // infowindow에 표시할 내용
                    });

                    // 마커에 mouseover 이벤트와 mouseout 이벤트를 등록합니다
                    // 이벤트 리스너로는 클로저를 만들어 등록합니다
                    // for문에서 클로저를 만들어 주지 않으면 마지막 마커에만 이벤트가 등록됩니다

                    // 인포윈도우를 표시하는 클로저를 만드는 함수입니다
                    window.kakao.maps.event.addListener(marker, 'mouseover', () => infowindow.open(map, marker));
                    // 인포윈도우를 닫는 클로저를 만드는 함수입니다
                    window.kakao.maps.event.addListener(marker, 'mouseout', () => infowindow.close());
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
    }, [url]);
    // userLocation 도 같이 변화가 있을 경우 계속 effect를 해야되는데 에러가 생김



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