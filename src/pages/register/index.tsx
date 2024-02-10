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

const Register: React.FC = () => {
  const router = useNavigate();
  const goSignUp = (type) => {
    const params = { type };
    router("/signup", { state: { type } });
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
      <IonContent className="ion-padding">
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
