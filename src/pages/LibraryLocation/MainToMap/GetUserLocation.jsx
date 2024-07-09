// // 현재 위치를 가져오는 함수
// export const GetUserLocation = (successCallback, errorCallback) => {
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(
//             (position) => {
//                 const lat = position.coords.latitude;
//                 const lng = position.coords.longitude;
//                 successCallback({ lat, lng });
//             },
//             (error) => {
//                 console.error(error);
//                 // 에러 발생 시 기본 좌표 설정 (서울 시청)
//                 errorCallback({ lat: 37.5665, lng: 126.9780 });
//             }
//         );
//     } else {
//         alert('Geolocation을 지원하지 않습니다.');
//         errorCallback({ lat: 37.5665, lng: 126.9780 });
//     }
// };

import { useState } from "react";
import axios from 'axios';

// 네트워크 기반으로 현재 위치 파악하기
export const GetUserLocation = async (successCallback, errorCallback) => {
    try{
        // 지금 위치 네트워크 찾기
        const ipv_four = await axios.get("https://geolocation-db.com/json/");
        const ip = ipv_four.data.IPv4;

        // 네트워크 기반으로 지금 위치(위도, 경도) 찾기
        if (ip) {
            try{
                const geoData = await axios.get(`http://ip-api.com/json/${ip}`);
                const latitude = geoData.data.lat;
                const longitude = geoData.data.lon;
                console.log(geoData.data);
                successCallback({lat: latitude, lng: longitude});
            } catch(geoErr) {
                console.error("Geolocation error:", geoErr);
                errorCallback({ lat: 37.5665, lng: 126.9780 });
            }
        } else {
            console.log('현재 좌표를 확인할 수 없습니다.');
            errorCallback({ lat: 37.5665, lng: 126.9780 });
        }
    } catch(ipErr) {
        console.error("Geolocation error:", ipErr);
        errorCallback({ lat: 37.5665, lng: 126.9780 });
    }
}