import React from "react";
import {
  IonButton,
  IonContent,
  IonHeader,
  IonMenu,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useNavigate } from "react-router-dom";
import { localToken } from "../utils/auth";
import { Toast } from "antd-mobile";

const SlideMenu: React.FC = () => {
  const navigate = useNavigate();
  const doLogout = () => {
    localToken.remove();
    Toast.show({
      content: "로그아웃 되었습니다.",
    });
    navigate("/");
  };
  const userProfile = () => {
    navigate("/user/profile");
  };

  return (
    <IonMenu side="end" contentId="main-menu">
      <IonContent className="ion-padding">
        <IonButton expand="full" fill="clear" onClick={userProfile}>
          개인정보 수정
        </IonButton>
        <IonButton expand="full" fill="solid" onClick={doLogout}>
          Log Out
        </IonButton>
      </IonContent>
    </IonMenu>
  );
};

export default SlideMenu;
