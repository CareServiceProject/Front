import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonModal,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import ServiceCard from "../../../components/ServiceCard";

const UserServiceList: React.FC = () => {
  const router = useNavigate();
  const data = [1, 2, 3, 4, 5];

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start" onClick={() => router(-1)}>
            <IonBackButton defaultHref="/"></IonBackButton>
          </IonButtons>
          <IonTitle>UserServiceList진행중</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        {data.map((item, index) => {
          return <ServiceCard key={index} data={item}></ServiceCard>;
        })}
      </IonContent>
    </IonPage>
  );
};

export default UserServiceList;
