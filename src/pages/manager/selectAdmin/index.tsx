import {
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonItem,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../../components/Logo";
import SlideMenu from "../../../components/SlideMenu";

const SelectAdmin: React.FC = () => {
  const navigate = useNavigate();

  const handleCardClick = (page: string) => {
    console.log(`카드가 클릭되었습니다. 페이지: ${page}`);
    navigate(`/${page}`);
  };

  return (
    <>
      <SlideMenu isAdmin={true}></SlideMenu>
      <IonPage id="main-menu">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="end">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>관리계정선택</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonItem lines="none" style={{ marginTop: "35px" }}>
          <Logo></Logo>
        </IonItem>
        <IonContent className="ion-padding">
          <IonCard onClick={() => handleCardClick("UserInfo")}>
            <IonCardHeader>
              <IonCardTitle style={{ padding: "5px" }}>User</IonCardTitle>
            </IonCardHeader>
            <IonCardContent style={{ padding: "10px 0 20px 25px" }}>
              Click here to navigate to User Info page.
            </IonCardContent>
          </IonCard>

          <IonCard onClick={() => handleCardClick("MateInfo")}>
            <IonCardHeader>
              <IonCardTitle style={{ padding: "5px" }}>Mate</IonCardTitle>
            </IonCardHeader>
            <IonCardContent style={{ padding: "10px 0 20px 25px" }}>
              Click here to navigate to Mate Info page.
            </IonCardContent>
          </IonCard>
        </IonContent>
      </IonPage>
    </>
  );
};

export default SelectAdmin;
