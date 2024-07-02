import React, { useState, useEffect } from 'react';
// ==========================================
import style from './Map.module.css';
// ==========================================
const { kakao } = window;

export default function KakaoMap() {

    const kakao_map_api_key = 'c69f1af4f87c934b25688caca0f813d0';
    const url = 'https://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=' + kakao_map_api_key + '&libraries=services,clusterer,drawing';

    // 지도 중심 좌표를 상태로 관리
    const [center, setCenter] = useState({ lat: 33.450701, lng: 126.570667 });

    // useEffect(() => {
    //     const container = document.getElementById("map");
    //     const options = {
    //         center: new kakao.maps.LatLng(center.lat, center.lng),
    //         level: 3,
    //     };
    //     const map = new kakao.maps.Map(container, options);
    // }, []);

    useEffect(() => {
        // Kakao Map 스크립트를 동적으로 로드
        const script = document.createElement('script');
        script.src = url;
        script.async = true;
        document.head.appendChild(script);

        script.onload = () => {
            if (window.kakao && window.kakao.maps) {
                window.kakao.maps.load(() => {
                    initializeMap();
                });
            } else {
                console.error('Kakao map API failed to load.');
            }
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

    const initializeMap = () => {
        if (!window.kakao || !window.kakao.maps) {
            console.error('Kakao map API is not loaded');
            return;
        }

        const container = document.getElementById('map');
        const options = {
            // 위도, 경도
            center: new window.kakao.maps.LatLng(center.lat, center.lng),
            // 확대 축소 정도
            level: 3,
        };
        new window.kakao.maps.Map(container, options);
    };

    return (
        <>
            <div id='map' className={ style.map }></div>
        </>
    )
}