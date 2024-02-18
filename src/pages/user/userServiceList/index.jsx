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
import { mateCareHistory } from "../../../api/mateApi";
import { userEvaluateApi } from "../../../api/userEvaluateApi";

const UserServiceList = () => {
  const router = useNavigate();
  const location = useLocation();
  const prefix = location.pathname.split("/")[1];
  const status = location.state.status;
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseData =
          prefix === "user"
            ? await userGetServiceList({ status })
            : await mateCareHistory({ careStatus: status });
        setData(responseData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [prefix, status]);

  // waiting, cancel, proceeding, completed
  const titleDisplay = () => {
    if (prefix === "user") {
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
    } else {
      switch (status) {
        case "IN_PROGRESS":
          return "진행중";
        case "HELP_DONE":
          return "완료";
        case "cancel":
          return "취소";
        default:
      }
    }
  };
  const handleEvaluate = async (careCid, starCount) => {
    try {
      await userEvaluateApi(careCid, starCount);
      const responseData =
        prefix === "user"
          ? await userGetServiceList({ status })
          : await mateCareHistory({ careStatus: status });
      setData(responseData);
    } catch (error) {
      console.error("Error evaluating:", error);
    }
  };

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
              onReload={() => window.location.reload()}
              onRate={handleEvaluate}
            ></ServiceCard>
          );
        })}
      </IonContent>
    </IonPage>
  );
};

export default UserServiceList;
