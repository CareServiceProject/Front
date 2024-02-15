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
import React, { useState, useEffect } from 'react';
import { Rate } from 'antd-mobile';
import StatusCard from '../../../components/StatusCard';
import DefaultAvatar from '../../../assets/default_avatar.jpg';
import { Link } from 'react-router-dom';
import './style.css';
import bodyImg from './body-logo.png';

const MateJudge: React.FC = () => {
  const [isApproved, setIsApproved] = useState<boolean | null>(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then((response) => response.json())
      .then((data) => {
        const isApproved = Math.random() < 0.5;
        setIsApproved(isApproved);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleApproval = () => {
    if (isApproved !== null) {
      if (isApproved) {
        window.location.href = '/mate/fail';
      } else {
        window.location.href = '/mate/pass';
      }
    }
  };

  return (
    <IonPage id="main-menu">
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="end">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Mate Judge</IonTitle>
        </IonToolbar>
      </IonHeader>
      <div className="ion-padding">
        <div className="logo-container">
          <Link to="/other-page">
            <img src={bodyImg} alt="Logo" className="logo-img" />
          </Link>
        </div>
        <div className="body-container-guide">
          <div className="body-guide">
            <h1>Welcome!</h1> <h2>귀하의 정보를 검토중입니다.</h2>
            <h2>완료까지 1~2일 정도 시간이 소요될 수 있습니다!!</h2>
            <h2>문의 사항은 00-000-000으로 부탁드립니다.</h2>
          </div>
        </div>
        <button className="btn-guide" onClick={handleApproval}>
          확인하기1
        </button>
      </div>
    </IonPage>
  );
};

export default MateJudge;
