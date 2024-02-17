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
} from '@ionic/react';
import React from 'react';
import { Rate } from 'antd-mobile';
import StatusCard from '../../../components/StatusCard';
import DefaultAvatar from '../../../assets/default_avatar.jpg';

const MateMy: React.FC = () => {
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
        <div style={{ display: 'flex' }} className="ion-margin">
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
            <Rate readOnly value={4.5} allowHalf />
            4.5
          </IonCardContent>
        </IonCard>
        <StatusCard></StatusCard>
      </IonContent>
    </IonPage>
  );
};

export default MateMy;
