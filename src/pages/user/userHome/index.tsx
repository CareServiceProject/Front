import React from "react";
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
<<<<<<< HEAD
} from '@ionic/react';
import SlideMenu from '../../../components/SlideMenu';
import './style0.css';
import { Link } from 'react-router-dom';
import bodyImg from '../../mate/mateJudge/body-logo.png';
=======
} from "@ionic/react";
import SlideMenu from "../../../components/SlideMenu";
import "./style.css";
import { Link } from "react-router-dom";
>>>>>>> 15f1ee43e0ba7880dbe38c226745047d26dd8aff

const UserHome: React.FC = () => {
  return (
    <>
      <IonPage id="main-menu">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="end">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle></IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="userHome">
          <div className="logo-container">
            <Link to="/other-page">
              <img src={bodyImg} alt="Logo" className="logo-img" />
            </Link>
          </div>
<<<<<<< HEAD
          <div className="apply-container">
            <Link to="/other-page">
              <h1 className="body-content"> 동행 서비스</h1>
=======
          <div className="body-image-container">
            <Link to="/user/request">
              <img src="body-image.png" alt="Body Image" className="body-img" />
>>>>>>> 15f1ee43e0ba7880dbe38c226745047d26dd8aff
            </Link>
          </div>
        </IonContent>
      </IonPage>
    </>
  );
};

export default UserHome;
