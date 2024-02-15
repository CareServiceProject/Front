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

const MateFail: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar></IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <div className="logo-container">
          <Link to="/other-page">
            <img src="body-logo.png" alt="실패사진" className="logo-img" />
          </Link>
        </div>
        <div className="body-image-container">
          <div>xxx</div>
          <Link to="/개인정보 수정페이지">
            <button className="btn-guide">메이트 재신청하기</button>
          </Link>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default MateFail;
