import {
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { useState } from "react";
import styles from "./login.module.css";
import Logo from "../../components/Logo";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [userid, setUserid] = useState("");
  const [password, setPassword] = useState("");
  const doLogin = () => {
    const data = {
      userid,
      password,
    };
    navigate("/user/home");
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <Logo></Logo>
        <form onSubmit={doLogin}>
          <IonInput
            label="User ID"
            labelPlacement="floating"
            fill="outline"
            placeholder="Please input your user id"
            required
            onIonChange={(e) => setUserid(e.detail.value)}
          ></IonInput>
          <IonInput
            label="Password"
            labelPlacement="floating"
            fill="outline"
            placeholder="Please input your password"
            className="ion-margin-top"
            required
            onIonChange={(e) => setPassword(e.detail.value)}
          ></IonInput>
          <IonButton expand="block" className="ion-margin-top" type="submit">
            Login
          </IonButton>
          <IonButton routerLink="/register" fill="clear">
            sign up
          </IonButton>
        </form>
        <p style={{ textAlign: "center" }}>or</p>
        <IonButton expand="block">OAuth</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Login;
