import React, { useEffect, useState } from 'react';
import style from './Photo.module.css';
const { kakao } = window;

export default function Photo() {
    // kakao map api key & URL
    const kakao_map_api_key = 'c69f1af4f87c934b25688caca0f813d0';
    const url = 'https://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=' + kakao_map_api_key + '&libraries=services,clusterer,drawing';

    // 도서관의 위도 경도
    const [center, setCenter] = useState({ lat: 37.5665, lng: 126.9780 });

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
                    center: new window.kakao.maps.LatLng( center.lat, center.lng ),
                    // 확대 축소 정도
                    level: 3,
                };
                const map = new window.kakao.maps.Map(container, options);

                // 현재 위치에 마커를 표시합니다.
                const marker = new window.kakao.maps.Marker({
                    position: new window.kakao.maps.LatLng( center.lat, center.lng ),
                    title: '현재 위치',
                });
                marker.setMap(map);

                const infowindow = new window.kakao.maps.InfoWindow({
                    content: '<div style="padding:5px 45px;">현재 위치</div>',
                });
                infowindow.open(map, marker);

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
    return (
        <div className={ style.base }>
            <div id = 'map' className={ style.map } />
        </div>
    );
}