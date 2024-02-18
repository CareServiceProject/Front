import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonModal,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import ServiceCard from "../../../components/ServiceCard";

const UserServiceList = () => {
  const router = useNavigate();
  const data = [1, 2, 3, 4, 5];
  const modal = useRef(null);
  const page = useRef(null);

  const [presentingElement, setPresentingElement] = useState(null);

  useEffect(() => {
    setPresentingElement(page.current);
  }, []);

  function dismiss() {
    modal.current?.dismiss();
  }

  async function canDismiss(data, role) {
    return role !== "gesture";
  }

  return (
    <IonPage ref={page}>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start" onClick={() => router(-1)}>
            <IonBackButton defaultHref="/"></IonBackButton>
          </IonButtons>
          <IonTitle>UserServiceList진행중</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        {data.map((item, index) => {
          return <ServiceCard key={index}></ServiceCard>;
        })}
      </IonContent>
      <IonModal
        ref={modal}
        trigger="open-modal"
        canDismiss={canDismiss}
        presentingElement={presentingElement!}
      >
        <IonHeader>
          <IonToolbar>
            <IonTitle>Modal</IonTitle>
            <IonButtons slot="end">
              <IonButton onClick={() => dismiss()}>Close</IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <p>
            To close this modal, please use the "Close" button provided. Note
            that swiping the modal will not dismiss it.
          </p>
        </IonContent>
      </IonModal>
    </IonPage>
  );
};

export default UserServiceList;
