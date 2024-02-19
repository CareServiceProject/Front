import {
  IonAvatar,
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { useEffect, useState } from "react";
import DefaultAvatar from "../../../assets/default_avatar.jpg";
import StatusCard from "../../../components/StatusCard";
import { useNavigate } from "react-router-dom";
import { userMyPage } from "../../../api/user";

const UserMy = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    const requestInfo = () => {
      userMyPage().then((res) => {
        setData(res);
      });
    };
    requestInfo();
  }, []);
  return (
    <IonPage id="main-menu">
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="end">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>My Page</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding ">
        <div
          style={{ display: "flex", alignItems: "center" }}
          className="ion-margin"
        >
          <IonAvatar className="ion-margin-end">
            <img src={DefaultAvatar}></img>
          </IonAvatar>
          <h2>{data.userId}님</h2>
        </div>
        <StatusCard data={data}></StatusCard>
      </IonContent>
    </IonPage>
  );
};

export default UserMy;
