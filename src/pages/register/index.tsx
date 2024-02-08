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
  useIonRouter,
} from "@ionic/react";
import React from "react";
import Logo from "../../components/Logo";

const Register: React.FC = () => {
  const router = useIonRouter();
  const goSignUp = (type) => {
    const params = { type };
    router.push("/signup", "root", "push", params);
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton></IonBackButton>
          </IonButtons>
          <IonTitle>Sign up</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <Logo></Logo>
        <IonButton
          routerLink="/signup"
          routerOptions={{ type: "user" }}
          expand="block"
        >
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
