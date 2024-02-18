import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonInput,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import Logo from "../../components/Logo";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const router = useNavigate();
  const goSignUp = (role) => {
    router("/signup", { state: { role } });
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start" onClick={() => router(-1)}>
            <IonBackButton defaultHref="/"></IonBackButton>
          </IonButtons>
          <IonTitle>Sign up</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding login">
        <Logo></Logo>
        <IonButton expand="block" onClick={() => goSignUp("user")}>
          Sign up as a user
        </IonButton>
        <IonButton
          onClick={() => goSignUp("mate")}
          expand="block"
          className="ion-margin-top"
        >
          Sign up as a mate
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Register;
