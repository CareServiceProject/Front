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
import { Empty } from "antd-mobile";

const UserServiceList = () => {
  const router = useNavigate();
  const location = useLocation();
  const prefix = location.pathname.split("/")[1];
  const status = location.state.status;
  const [data, setData] = useState([]);
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
  useEffect(() => {
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
        {data.length > 0 ? (
          data.map((item) => {
            return (
              <ServiceCard
                key={item.careCid}
                data={item}
                role={prefix}
                status={status}
                onReload={() => fetchData()}
                onRate={handleEvaluate}
              ></ServiceCard>
            );
          })
        ) : (
          <Empty
            description="조회된 내용이 없습니다."
            style={{ marginTop: "150px" }}
          />
        )}
      </IonContent>
    </IonPage>
  );
};

export default UserServiceList;
