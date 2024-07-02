import React, { useState, useEffect } from 'react';
// ==========================================
import style from './Map.module.css';
// ==========================================

export default function KakaoMap() {

    const kakao_map_api_key = 'ac64d3ce26b58220c65931d4a3dbbad6';
    const url = 'https://dapi.kakao.com/v2/maps/sdk.js?appkey=${kakao_map_api_key}&autoload=false';

    // 지도 중심 좌표를 상태로 관리
    const [center, setCenter] = useState({ lat: 33.450701, lng: 126.570667 });

    useEffect(() => {
        // kakao map 화면에 나타내는 script
        const script = document.createElement('script');
        script.src = url;
        script.async = true;
        document.head.appendChild(script);

        script.onload = () => {
            if (window.kakao && window.kakao.maps) {
                window.kakao.maps.load(() => {
                    const container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
                    var options = { //지도를 생성할 때 필요한 기본 옵션
                        center: new kakao.maps.LatLng(center.lat, center.lng), //지도의 중심좌표.
                        level: 3 //지도의 레벨(확대, 축소 정도)
                    };
                    new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
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
            document.head.removeChild(script);
        }

    },[url]);

    return (
        <>
            <div id='map' className={ style.map }></div>
        </>
    )
}