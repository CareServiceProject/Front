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
import './style.css';

const MateHome: React.FC = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/todos/3'
        );
        const data = await response.json();
        setCount(data.id);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <IonPage id="main-menu">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="end">
              <IonMenuButton />
            </IonButtons>
            <IonTitle></IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <div className="logo-container">
            <Link to="/other-page">
              <img src="logo.png" alt="Logo" className="logo-img" />
            </Link>
          </div>
          <div className="body-container">
            <Link to="/other-page">
              <div className="body-top">신규요청</div>
              <div className="body-count">{count} 건</div>
            </Link>
          </div>
        </IonContent>
      </IonPage>
    </>
  );
};

export default MateHome;
