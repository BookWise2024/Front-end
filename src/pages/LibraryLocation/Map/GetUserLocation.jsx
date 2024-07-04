// 현재 위치를 가져오는 함수
export const GetUserLocation = (successCallback, errorCallback) => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;
                successCallback({ lat, lon });
            },
            (error) => {
                console.error(error);
                // 에러 발생 시 기본 좌표 설정 (서울 시청)
                errorCallback({ lat: 37.5665, lon: 126.9780 });
            }
        );
    } else {
        alert('Geolocation을 지원하지 않습니다.');
        errorCallback({ lat: 37.5665, lon: 126.9780 });
    }
};