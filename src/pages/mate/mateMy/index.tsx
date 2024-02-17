import {
  IonAvatar,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { useEffect, useState } from "react";
import { Rate } from "antd-mobile";
import StatusCard from "../../../components/StatusCard";
import DefaultAvatar from "../../../assets/default_avatar.jpg";
import { mateCareHistory, mateMy } from "../../../api/mateApi";

const MateMy: React.FC = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const requestInfo = () => {
      mateMy().then((res) => {
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
          <IonTitle>Page Title</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <div style={{ display: "flex" }} className="ion-margin">
          <IonAvatar className="ion-margin-end">
            <img src={DefaultAvatar}></img>
          </IonAvatar>
          <h2>000님</h2>
        </div>
        <IonCard>
          <IonCardHeader>
            <h6>내 별점</h6>
          </IonCardHeader>
          <IonCardContent>
            <Rate readOnly value={data.mateRating} allowHalf />{" "}
            {data.mateRating}
            {"점"}
          </IonCardContent>
        </IonCard>
        <StatusCard data={data}></StatusCard>
      </IonContent>
    </IonPage>
  );
};

export default MateMy;
