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
import React, { useEffect, useState } from 'react';
import { Rate } from 'antd-mobile';
import StatusCard from '../../../components/StatusCard';
import DefaultAvatar from '../../../assets/default_avatar.jpg';
import {
  mateCancel,
  mateCareHistory,
  mateInfo,
  mateMy,
} from '../../../api/mateApi';

const MateMy = () => {
  const [data, setData] = useState({});
  const [info, setInfo] = useState({});

  useEffect(() => {
    const requestInfo = () => {
      mateMy().then((res) => {
        setData(res);
      });
    };

    const myInfo = () => {
      mateInfo().then((res) => {
        setInfo(res);
      });
    };
    requestInfo();
    myInfo();
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
      <IonContent className="ion-padding ">
        <div
          style={{ display: 'flex', alignItems: 'center' }}
          className="ion-margin"
        >
          <IonAvatar
            className="ion-margin-end"
            style={{ width: '80px', height: '80px' }}
          >
            <img src={data.imageAddress || DefaultAvatar}></img>
          </IonAvatar>
          <h2>{info.name}님</h2>
        </div>
        <IonCard>
          <IonCardHeader>
            <h6>내 별점</h6>
          </IonCardHeader>
          <IonCardContent>
            <Rate readOnly value={data.mateRating} allowHalf />{' '}
            {data.mateRating}
            {'점'}
          </IonCardContent>
        </IonCard>

        <StatusCard data={data}></StatusCard>
        <div style={{ height: '100px' }}></div>
      </IonContent>
    </IonPage>
  );
};

export default MateMy;
