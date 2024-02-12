import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../../components/Logo";

const SelectAdmin: React.FC = () => {
  const navigate = useNavigate();

  const handleButtonClick = (page: string) => {
    // 처리할 함수 호출 또는 라우팅 등
    console.log(`버튼이 클릭되었습니다. 페이지: ${page}`);
    navigate(`/${page}`);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>관리계정선택</IonTitle>
        </IonToolbar>
      </IonHeader>
      <Logo></Logo>
      <IonContent
        className="ion-padding"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ marginTop: "70px" }}></div>
        <IonButton
          size="large"
          expand="full"
          style={{
            "--padding-top": "30px",
            "--padding-bottom": "30px",
            "max-width": "450px",
            margin: "0 auto",
            "font-size": "25px",
          }}
          onClick={() => handleButtonClick("UserInfo")}
        >
          User
        </IonButton>

        <div
          style={{
            marginTop: "15px",
          }}
        ></div>
        <IonButton
          size="large"
          expand="full"
          style={{
            "--padding-top": "30px",
            "--padding-bottom": "30px",
            "max-width": "450px",
            margin: "0 auto",
            "font-size": "25px",
          }}
          onClick={() => handleButtonClick("MateInfo")}
        >
          Mate
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default SelectAdmin;
