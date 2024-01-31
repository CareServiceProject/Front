import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonRouter,
} from "@ionic/react";
import React from "react";

const Login: React.FC = () => {
  const router = useIonRouter();
  const doLogin = () => {
    router.push("/user", "root");
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonButton onClick={doLogin}>Login...</IonButton>
        <IonButton routerLink="/register">Register.</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Login;
