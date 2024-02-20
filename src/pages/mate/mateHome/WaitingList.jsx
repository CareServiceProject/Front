import React, { useEffect, useState } from "react";
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ServiceCard from "../../../components/ServiceCard";
import { fetchWaitingCareList, mateApply } from "../../../api/mateApi";
import { useNavigate } from "react-router-dom";
import { Empty, Toast } from "antd-mobile";

// 대기중인 도움 목록의 데이터 형식을 정의한 인터페이스
// interface WaitingListData {
//   id: string;
//   role: string;
//   status: number;
//   // 필요한 다른 속성들을 여기에 추가
// }

const WaitingList = () => {
  const navigate = useNavigate();
  // 대기중인 도움 목록 상태를 선언하고 인터페이스로 타입을 지정
  const [waitingList, setWaitingList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const waitingListData = await fetchWaitingCareList();

      setWaitingList(waitingListData);
    } catch (error) {
      console.error("Failed to fetch waiting list:", error);
    }
  };

  // 수락 핸들러
  const handleAccept = (id) => {
    // 여기서 수락 로직을 구현합니다.
    mateApply(id).then((res) => {
      if (res.code === 200) {
        Toast.show(res.message);
        fetchData();
      } else Toast.show(res.message);
    });
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start" onClick={() => navigate(-1)}>
            <IonBackButton defaultHref="/"></IonBackButton>
          </IonButtons>
          <IonTitle>대기중인 도움 목록</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        {waitingList.length > 0 ? (
          waitingList.map((item, index) => (
            <ServiceCard
              key={item.careCid}
              data={item}
              role="mate"
              status="waiting"
              onAccept={handleAccept}
            />
          ))
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

export default WaitingList;
