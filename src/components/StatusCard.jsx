import React from "react";
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonItem,
  IonLabel,
  IonList,
  IonIcon,
  IonButton,
  IonBackButton,
} from "@ionic/react";
import {
  chevronForwardOutline,
  checkmarkDoneOutline,
  radioOutline,
  closeOutline,
  heartCircleOutline,
} from "ionicons/icons";
import { useLocation, useNavigate } from "react-router-dom";

const StatusCard = ({ data }) => {
  const router = useNavigate();
  const location = useLocation();
  const prefix = location.pathname.split("/")[1];
  const status =
    prefix === "user"
      ? [
          {
            title: "대기중",
            count: data.waitingCount,
            icon: radioOutline,
            status: "waiting",
          },

          {
            title: "진행중",
            count: data.proceedingCount,
            icon: heartCircleOutline,
            status: "proceeding",
          },
          {
            title: "완료",
            count: data.completedCount,
            icon: checkmarkDoneOutline,
            status: "completed",
          },
          {
            title: "취소",
            count: data.cancelledCount,
            icon: closeOutline,
            status: "cancel",
          },
        ]
      : [
          { title: "진행중", count: 0, icon: heartCircleOutline, status: 1 },
          { title: "완료", count: 0, icon: checkmarkDoneOutline, status: 2 },
          { title: "취소", count: 0, icon: closeOutline, status: 3 },
        ];

  return (
    <IonCard>
      <IonCardHeader>
        <h5>나의 동행 서비스 현황</h5>
      </IonCardHeader>
      <IonCardContent>
        {status.map((item) => {
          return (
            <IonList key={item.title}>
              <IonItem
                onClick={() =>
                  router(`/${prefix}/mypage/service_list`, {
                    state: { status: item.status },
                  })
                }
              >
                <IonIcon icon={item.icon} className="ion-margin"></IonIcon>
                <IonLabel>{item.title}</IonLabel>
                <p>{item.count}건</p>
                <IonButton fill="none">
                  <IonIcon icon={chevronForwardOutline}></IonIcon>
                </IonButton>
              </IonItem>
            </IonList>
          );
        })}
      </IonCardContent>
    </IonCard>
  );
};

export default StatusCard;
