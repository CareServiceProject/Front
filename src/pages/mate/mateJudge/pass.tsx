import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonModal,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ServiceCard from '../../../components/ServiceCard';
import { Link } from 'react-router-dom';

const MatePass: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar></IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <div className="logo-container">
          <Link to="/other-page">
            <img src="logo.png" alt="성공사진" className="logo-img" />
          </Link>
        </div>
        <div className="body-image-container1">
          <Link to="/mate/home">
            <div>ooo</div>
            <button className="btn-guide">확인</button>
          </Link>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default MatePass;
