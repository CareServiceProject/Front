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
import fail from './fail.png';

const MateFail: React.FC = () => {
  return (
    <IonPage>
      <IonContent className="ion-padding" style={{ backgroundColor: 'white' }}>
        <div
          className="logo-container"
          style={{ marginTop: '25px', textAlign: 'center' }}
        >
          <img src={fail} alt="실패사진" className="logo-img" />
        </div>
        <div
          className="body-image-container "
          style={{ padding: '30px', textAlign: 'center' }}
        >
          <div>
            <h1>아쉬워요..!</h1>
            <p style={{ marginBottom: '40px', fontSize: '15.5px' }}>
              메이트로 함께하고 싶었지만
              <br />
              이번에는 아쉽게 되었어요..!
              <br />한 번 더 신청해 주셔서 꼭 함께 메이트로 나아가요!
            </p>
          </div>
          <Link to="/user/profile">
            <button
              className="btn-guide"
              style={{
                backgroundColor: '#ffffff',
                color: 'black',
                fontSize: '18px',
                border: '2px solid black',
                borderRadius: '10px',
                transition: 'box-shadow 0.3s ease',
                padding: '20px',
              }}
            >
              메이트 재신청하기
            </button>
          </Link>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default MateFail;
