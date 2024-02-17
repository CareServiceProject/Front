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
import { useLocation, useNavigate } from "react-router-dom";
import ServiceCard from "../../../components/ServiceCard";
import { userGetServiceList } from "../../../api/user";

const UserServiceList: React.FC = () => {
  const router = useNavigate();
  const location = useLocation();
  const prefix = location.pathname.split("/")[1];
  const status = location.state.status;
  const [data, setData] = useState([]);
  // waiting, cancel, proceeding, completed
  const titleDisplay = () => {
    switch (status) {
      case "waiting":
        return "대기중";
      case "proceeding":
        return "진행중";
      case "completed":
        return "완료";
      case "cancel":
        return "취소";
      default:
    }
  };
  useEffect(() => {
    userGetServiceList({ status: status }).then((res) => {
      console.log(res);
      setData(res);
    });
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start" onClick={() => router(-1)}>
            <IonBackButton defaultHref="/"></IonBackButton>
          </IonButtons>
          <IonTitle>{titleDisplay()}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        {data.map((item, index) => {
          return (
            <ServiceCard
              key={index}
              data={item}
              role={prefix}
              status={status}
            ></ServiceCard>
          );
        })}
      </IonContent>
    </IonPage>
  );
};

export default UserServiceList;
