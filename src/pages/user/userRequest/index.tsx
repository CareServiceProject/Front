import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonDatetime,
  IonButton,
  IonButtons,
  IonInput,
  IonLabel,
  IonSelect,
  IonSelectOption,
  IonAlert,
  IonBackButton,
  IonDatetimeButton,
  IonModal,
} from "@ionic/react";
import toISOLocal from "../../../utils/getLocalISO";
import { Toast } from "antd-mobile";

const UserRequest: React.FC = () => {
  const router = useNavigate();

  const [destination, setDestination] = useState(null);
  const [pickupLocation, setPickupLocation] = useState(null);
  const [serviceAmount, setServiceAmount] = useState(null);
  const [preferredGender, setPreferredGender] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const [startTime, setStartTime] = useState(toISOLocal(new Date()));
  const [endTime, setEndTime] = useState(toISOLocal(new Date()));

  const submitForm = () => {
    const data = {
      meetingDate: startTime.slice(0, 10),
      startTime: startTime.slice(11, 19),
      endTime: endTime ? endTime.slice(11, 19) : null,
      meetingLoc: pickupLocation,
      destination: destination,
      gender: preferredGender,
      cost: serviceAmount,
      content: "",
    };
    if (
      destination &&
      pickupLocation &&
      serviceAmount &&
      serviceAmount &&
      preferredGender &&
      endTime
    ) {
      // TODO
    } else {
      Toast.show({
        content: "작성 완료해주세요.",
      });
    }
    console.log(data);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start" onClick={() => router(-1)}>
            <IonBackButton defaultHref="/"></IonBackButton>
          </IonButtons>
          <IonTitle>동행 서비스 신청</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding signUp">
        <IonLabel>시작 시간</IonLabel>
        <IonDatetimeButton datetime="startTime"></IonDatetimeButton>
        <IonModal keepContentsMounted={true}>
          <IonDatetime
            id="startTime"
            min={toISOLocal(new Date())}
            onIonChange={(v) => {
              setStartTime(v.detail.value);
            }}
          ></IonDatetime>
        </IonModal>

        <IonLabel>종료 시간</IonLabel>
        <IonDatetimeButton
          datetime="endTime"
          disabled={startTime ? false : true}
        ></IonDatetimeButton>
        <IonModal keepContentsMounted={true}>
          <IonDatetime
            id="endTime"
            min={startTime}
            max={startTime.slice(0, 11) + "23:59:59" + startTime.slice(19)}
            onIonChange={(v) => {
              setEndTime(v.detail.value);
            }}
          ></IonDatetime>
        </IonModal>

        <IonInput
          className="ion-margin-top ion-padding"
          label="픽업장소"
          type="text"
          value={pickupLocation}
          onIonInput={(e) => setPickupLocation(e.target.value!)}
        ></IonInput>

        <IonInput
          className="ion-margin-top ion-padding"
          label="목적지"
          type="text"
          value={destination}
          onIonInput={(e) => setDestination(e.target.value!)}
        />

        <IonInput
          className="ion-margin-top ion-padding"
          label="서비스금액"
          type="number"
          value={serviceAmount}
          onIonInput={(e) => setServiceAmount(parseInt(e.target.value))}
        />

        <IonSelect
          className="ion-margin-top"
          label="선호 성별"
          interface="popover"
          value={preferredGender}
          onIonChange={(e) => setPreferredGender(e.detail.value)}
          style={{ backgroundColor: "white", padding: "0 12px 0 12px" }}
        >
          <IonSelectOption value="여">여</IonSelectOption>
          <IonSelectOption value="남">남</IonSelectOption>
          <IonSelectOption value="무관">무관</IonSelectOption>
        </IonSelect>
        <IonButton onClick={submitForm}>신청하기</IonButton>

        <IonAlert
          isOpen={isOpen}
          header="신청 완료!"
          subHeader="요청하신 동행이 성공적으로 신청 완료되었습니다."
          buttons={["닫기"]}
          onDidDismiss={() => setIsOpen(false)}
        ></IonAlert>
      </IonContent>
    </IonPage>
  );
};

export default UserRequest;
