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
import "./login.css";
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
    <div style={{ backgroundColor: "#005F69" }}>
      <IonPage>
        <IonContent className="ion-padding login">
          <Logo></Logo>
          <form onSubmit={doLogin}>
            <IonInput
              label="User ID"
              labelPlacement="start"
              placeholder="Please input your user id"
              required
              onIonChange={(e) => setUserid(e.detail.value)}
              className="ion-padding"
            ></IonInput>
            <IonInput
              label="Password"
              labelPlacement="start"
              placeholder="Please input your password"
              className="ion-margin-top ion-padding"
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
          {/* <p style={{ textAlign: "center" }}>or</p>
          <IonButton expand="block">OAuth</IonButton> */}
        </IonContent>
      </IonPage>
    </div>
  );
};

export default Login;
