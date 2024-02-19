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
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
} from '@ionic/react';
import React, { useState, useEffect } from 'react';
import { Rate } from 'antd-mobile';
import StatusCard from '../../../components/StatusCard';
import DefaultAvatar from '../../../assets/default_avatar.jpg';
import { Link } from 'react-router-dom';
import './style.css';
import bodyImg from '../../../assets/logo-big-greenRed.png';

const MateJudge: React.FC = () => {
  const [isApproved, setIsApproved] = useState<boolean | null>(null);

  useEffect(() => {
    fetch('http://43.203.89.178:8080/api/master/approve/{mateCid}')
      .then((response) => response.json())
      .then((data) => {
        const isApproved = data.approved; // 예시로 받아온 데이터에서 승인 여부 확인
        setIsApproved(isApproved);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleApproval = () => {
    if (isApproved !== null) {
      if (isApproved) {
        window.location.href = '/mate/pass';
      } else {
        window.location.href = '/mate/fail';
      }
    }
  };

  return (
    <div style={{ padding: '53px 31px 31px' }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0% auto 0',
          backgroundColor: '#ffffff',
          width: '313px',
          height: '227px',
          cursor: 'pointer',
          border: '2px solid #ccc',
          borderRadius: '10px',
          boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.1)',
          transition: 'box-shadow 0.3s ease',
        }}
      >
        <Link to="/">
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
          />
        </Link>
      </div>
      <div
        style={{
          marginTop: '55px',

          textAlign: 'center',
          marginBottom: '20px',
          fontFamily: 'TmoneyRoundWind',
          color: 'black',
        }}
      >
        <h1 style={{ fontSize: '23px' }}>Welcome!</h1>
        <h2 style={{ fontSize: '19px' }}>귀하의 정보를 검토 중입니다.</h2>
        <h2 style={{ fontSize: '19px' }}>
          완료까지 1~2일 정도 시간이 소요될 수 있습니다!!
        </h2>
        <h2 style={{ fontSize: '15px' }}>
          문의 사항은 00-000-000으로 부탁드립니다.
        </h2>
      </div>
      <div style={{ textAlign: 'center' }}></div>
    </div>
  );
};

export default MateJudge;
