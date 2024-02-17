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
} from '@ionic/react';
import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ServiceCard from '../../../components/ServiceCard';

const UserServiceList: React.FC = () => {
  const router = useNavigate();
  const location = useLocation();
  const prefix = location.pathname.split('/')[1];
  const status = location.state.status;
  const data = [1, 2, 3, 4, 5];

  const titleDisplay = () => {
    switch (status) {
      case 0:
        return '대기중';
      case 1:
        return '진행중';
      case 2:
        return '완료';
      case 3:
        return '취소';
      default:
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start" onClick={() => router(-1)}>
            <IonBackButton defaultHref="/"></IonBackButton>
          </IonButtons>
          <IonTitle>{titleDisplay()}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        {data.map((item, index) => {
          return (
            <ServiceCard
              key={index}
              data={item}
              role={prefix}
              status={status}
            ></ServiceCard>
          );
        })}
      </IonContent>
    </IonPage>
  );
};

export default UserServiceList;
