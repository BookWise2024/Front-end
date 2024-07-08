import React, { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";
const { kakao } = window;
// ==========================================
import style from './Library.module.css';
import AppStyle from '../../../../App.module.css';
// ==========================================
import DropDown from '../../../../Common/Dropdown/DropdownMenu.jsx';
// ==========================================
import loc from '../../../../assets/img/map/icon_location_gray.svg';

export default function Library(props) {
    // kakao map api key & URL
    const kakao_map_api_key = 'c69f1af4f87c934b25688caca0f813d0';
    const url = 'https://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=' + kakao_map_api_key + '&libraries=services,clusterer,drawing';

    const userLocation = props.userLocation;
    const aroundLib = props.aroundLib;
    const bookId = props.bookId;

    // 위치별 지역 주소 표시
    const [address, setAddress] = useState("");
    console.log(aroundLib);
    console.log(userLocation);
    console.log(bookId);

    useEffect(() => {
        // Kakao Map 스크립트를 동적으로 로드
        const script = document.createElement('script');
        script.src = url + "&autoload=false";
        script.async = true;
        document.head.appendChild(script);
        script.onload = () => {
            window.kakao.maps.load(() => {
                // 주소-좌표 변환 객체를 생성합니다
                const geocoder = new window.kakao.maps.services.Geocoder();
                const coord = new window.kakao.maps.LatLng(userLocation.lat, userLocation.lng);
                geocoder.coord2RegionCode(coord.getLng(), coord.getLat(), (result, status) => {
                    if (status === window.kakao.maps.services.Status.OK) {
                        const addressName = result[0].address_name;
                        // console.log('행정동 주소:', addressName);
                        setAddress(addressName);
                    }
                });
            });
        };
    }, [aroundLib, userLocation]);

    const navigate = useNavigate();
    // 주변 도서관 정보 표시
    const libList = [];
    // 주변 도서관 도서 유무 표시
    const bookExist = [];
    // dropdown 정렬 정보
    const [dropData, setDropData] = useState('');
    const handleChildData = (data) => {
        setDropData(data);
    }
    console.log(dropData);

    // 도서관 상세 페이지로 이동
    // function Info(libraryId) {
    //     navigate("/BookInfoLibInfo?libraryId=" + libraryId);
    // }

    // 도서관 상세 페이지로 이동
    function Info(libraryId, hasBook, loanAvailable) {
        console.log("/BookInfoLibInfo?bookId=" + bookId + "&libraryId=" + libraryId + "&hasbook=" + hasBook + "&loanAvailable=" + loanAvailable)
        navigate("/BookInfoLibInfo?isbn13=" + bookId + "&libraryId=" + libraryId + "&hasbook=" + hasBook + "&loanAvailable=" + loanAvailable);
    }

    // 책 보유 여부에 따른 활성화 버튼
    function exist(hasBook) {
        if(hasBook === "Y") {
            return(
                <div className={`${AppStyle.Body4} ${style.exist}`}>
                    <div className={`${AppStyle.Button2} ${style.exist_text}`}>
                        보유중
                    </div>
                </div>
            );
        } else if (hasBook === "N") {
            return(
                <div className={`${AppStyle.Body4} ${style.nonexist}`}>
                    <div className={`${AppStyle.Button2} ${style.nonexist_text}`}>
                        미보유
                    </div>
                </div>
            )
        }
    }

    for(let i = 0; i < aroundLib.length; i++){
        // dropdown 정렬
        // 보유순
        if(dropData === '보유순') {
            if(aroundLib[i].hasBook === "Y") {
                libList.push(
                    <>
                        <div className={style.libraryInfo}
                             onClick={() => Info(aroundLib[i].libraryId, aroundLib[i].hasBook, aroundLib[i].loanAvailable)}>
                            <div className={`${AppStyle.Body1} ${style.libraryName}`}>
                                {aroundLib[i].name}
                            </div>
                            <div className={style.libraryLoc}>
                                <div className={`${AppStyle.Body4} ${style.address}`}>
                                    {aroundLib[i].address}
                                </div>
                                <div className={`${AppStyle.Caption2} ${style.distance}`}>
                                    {aroundLib[i].distance} km
                                </div>
                                <div className={`${AppStyle.Body4} ${style.exist}`}>
                                    <div className={`${AppStyle.Button2} ${style.exist_text}`}>
                                        <div className={`${AppStyle.Body4} ${style.exist}`}>
                                           <div className={`${AppStyle.Button2} ${style.exist_text}`}>
                                               { exist(aroundLib[i].hasBook) }
                                           </div>
                                       </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                );
            }
        }
        // ========================================================================================
        // 기본(거리순)
        else {
            libList.push(
                <>
                    <div className={style.libraryInfo} onClick={() => Info(aroundLib[i].libraryId, aroundLib[i].hasBook, aroundLib[i].loanAvailable)}>
                    {/*<div className={style.libraryInfo} onClick={() => Info(aroundLib[i].libraryId)}>*/}
                        <div className={`${AppStyle.Body1} ${style.libraryName}`}>
                        { aroundLib[i].name }
                        </div>
                        <div className={style.libraryLoc}>
                            <div className={`${AppStyle.Body4} ${style.address}`}>
                                {aroundLib[i].address}
                            </div>
                            <div className={`${AppStyle.Caption2} ${style.distance}`}>
                                {aroundLib[i].distance} km
                            </div>
                            <div className={`${AppStyle.Body4} ${style.exist}`}>
                                <div className={`${AppStyle.Button2} ${style.exist_text}`}>
                                    { exist(aroundLib[i].hasBook) }
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            );
        }
    }

    return (
        <>
            <div className={`${style.text} ${AppStyle.subtitle1}`}>
                근처 공공도서관 정보
            </div>
            <div className={style.divide}></div>
            <div className={style.locInfo}>
                <div className={style.loc}>
                    <div className={style.icon}>
                        <img src={loc}/>
                    </div>
                    <div className={AppStyle.Body4}>{ address }</div>
                </div>
            </div>
            <DropDown onData = {handleChildData} />
            <div className={style.librarys}>
                { libList }
            </div>
        </>
    )
}