import style from "./NotFound.module.css";
import AppStyle from "../App.module.css";
import Layout from "../Common/Layout/Layout.jsx";
import { useNavigate } from "react-router-dom";
import NotFoundImg from "../assets/img/NotFound.svg";

export default function NotFound() {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/"); // 홈 경로로 이동
  };

  const goToPrevious = () => {
    navigate(-1); // 이전 경로로 이동
  };

  return (
    <Layout>
      <div className={style.container}>
        <div className={style.alert_box}>
          <img className={style.NotFound_img} src={NotFoundImg} alt="NotFound 이미지" /> 
          <div className={style.txt_box}>
            <div className={`${style.msg} ${AppStyle.title1}`}>
              다시 한번 확인해주세요!
            </div>
            <div
              style={{ marginBottom: "10.19rem" }}
              className={`${style.msg} ${AppStyle.Body5}`}
            >
              주소가 잘못 입력되었거나, 변경 혹은 삭제되어
              <br />
              요청하신 페이지를 찾을 수 없습니다.
              <br />
              주소를 다시 확인해주세요.
            </div>
          </div>
        </div>
        <div className={style.btn_container}>
        
          {/* 버튼 컨테이너 추가 */}
          <button
            className={`${style.customButton1} ${AppStyle.button1}`}
            onClick={goToHome}
          >
            홈으로 가기
          </button>
          <button
            className={`${style.customButton2} ${AppStyle.button1}`}
            onClick={goToPrevious}
          >
            이전으로 가기
          </button>
        </div>
      </div>
    </Layout>
  );
}
