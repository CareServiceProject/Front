import React, { useEffect, useState } from 'react';
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { Link } from 'react-router-dom';

import bodyImg from './body-logo.png';

const MateHome: React.FC = () => {
  const [waitingCareList, setWaitingCareList] = useState([]);

  useEffect(() => {
    const fetchWaitingCareList = async () => {
      try {
        const response = await fetch(
          'http://43.203.89.178:8080/api/mate/waitingCarelist'
        );
        const data = await response.json();
        setWaitingCareList(data);
      } catch (error) {
        console.error('Error fetching waiting care list:', error);
      }
    };

    fetchWaitingCareList();
  }, []);

  return (
    <IonPage id="main-menu">
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="end">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle></IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent style={{ backgroundColor: 'pink' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 'auto',
            height: 'auto',
            backgroundColor: '#ffffff',
            margin: '30px 30px 20px',
            textDecoration: 'none',
            color: 'black',
          }}
          className="mateLogo-container"
        >
          <Link to="/other-page">
            <img
              src={bodyImg}
              alt="Logo"
              style={{
                flexDirection: 'column',
                cursor: 'pointer',
                width: '200px',
                height: '100%',
                objectFit: 'cover',
              }}
              className="mllogo-img"
            />
          </Link>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '10% auto 0',
            backgroundColor: '#ffffff',
            width: '313px',
            height: '227px',
            cursor: 'pointer',
          }}
          className="request-container"
        >
          <Link to="/other-page">
            <div
              style={{ textDecoration: 'none', color: 'black' }}
              className="request-top"
            >
              신규요청
            </div>
            <div
              style={{ textDecoration: 'none', color: 'black' }}
              className="request-count"
            >
              {waitingCareList.length} 건
            </div>
          </Link>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default MateHome;
