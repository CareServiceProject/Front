import React, { useState, useRef, useEffect } from "react";

import DatePicker from "react-datepicker";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonDatetime,
  IonButton,
  IonInput,
  IonLabel,
  IonSelect,
  IonSelectOption,
  IonModal,
  IonButtons,
  IonButton as IonModalButton,
} from "@ionic/react";
import TimePicker from "react-time-picker";
import "react-datepicker/dist/react-datepicker.css";

const UserRequest: React.FC = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [startTime, setStartTime] = useState("00:00");
  const [endTime, setEndTime] = useState("00:00");
  const [destination, setDestination] = useState("");
  const [pickupLocation, setPickupLocation] = useState("");
  const [serviceAmount, setServiceAmount] = useState("");
  const [preferredGender, setPreferredGender] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitEnabled, setIsSubmitEnabled] = useState(false);
  const modal = useRef<HTMLIonModalElement>(null);

  const generateHourOptions = () => {
    const hours = [];
    for (let i = 0; i < 24; i++) {
      const hour = i < 10 ? `0${i}` : `${i}`;
      hours.push(
        <IonSelectOption key={hour} value={hour}>
          {hour}
        </IonSelectOption>
      );
    }
    return hours;
  };

  const generateMinuteOptions = () => {
    const minutes = [];
    for (let i = 0; i < 60; i += 5) {
      const minute = i < 10 ? `0${i}` : `${i}`;
      minutes.push(
        <IonSelectOption key={minute} value={minute}>
          {minute}
        </IonSelectOption>
      );
    }
    return minutes;
  };

  useEffect(() => {
    // setPresentingElement(page.current)
  }, []);

  function dismiss() {
    modal.current?.dismiss();
  }

  async function canDismiss(data, role) {
    return role !== "gesture";
  }

  useEffect(() => {
    const areFieldsFilled =
      startDate &&
      startTime &&
      endTime &&
      destination.trim() !== "" &&
      pickupLocation.trim() !== "" &&
      serviceAmount.trim() !== "" &&
      preferredGender.trim() !== "";

    setIsSubmitEnabled(areFieldsFilled);
  }, [
    startDate,
    startTime,
    endTime,
    destination,
    pickupLocation,
    serviceAmount,
    preferredGender,
  ]);

  const submitForm = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>동행 서비스</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <div>
          <label>날짜:</label>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
        </div>

        <div>
          <label>시작 시간:</label>
          <IonSelect
            placeholder="시를 선택하세요"
            value={startTime.split(":")[0]}
            onIonChange={(e) =>
              setStartTime(`${e.detail.value}:${startTime.split(":")[1]}`)
            }
          >
            {generateHourOptions()}
          </IonSelect>

          <IonSelect
            placeholder="분을 선택하세요"
            value={startTime.split(":")[1]}
            onIonChange={(e) =>
              setStartTime(`${startTime.split(":")[0]}:${e.detail.value}`)
            }
          >
            {generateMinuteOptions()}
          </IonSelect>
        </div>

        <div>
          <label>종료 시간:</label>
          <IonSelect
            placeholder="시를 선택하세요"
            value={endTime.split(":")[0]}
            onIonChange={(e) =>
              setEndTime(`${e.detail.value}:${endTime.split(":")[1]}`)
            }
          >
            {generateHourOptions()}
          </IonSelect>

          <IonSelect
            placeholder="분을 선택하세요"
            value={endTime.split(":")[1]}
            onIonChange={(e) =>
              setEndTime(`${endTime.split(":")[0]}:${e.detail.value}`)
            }
          >
            {generateMinuteOptions()}
          </IonSelect>
        </div>

        <div>
          <IonLabel>목적지:</IonLabel>
          <IonInput
            type="text"
            value={destination}
            onIonChange={(e) => setDestination(e.detail.value!)}
          />
        </div>

        <div>
          <IonLabel>픽업장소:</IonLabel>
          <IonInput
            type="text"
            value={pickupLocation}
            onIonChange={(e) => setPickupLocation(e.detail.value!)}
          />
        </div>

        <div>
          <IonLabel>서비스금액:</IonLabel>
          <IonInput
            type="text"
            value={serviceAmount}
            onIonChange={(e) => setServiceAmount(e.detail.value!)}
          />
        </div>

        <div>
          <IonLabel>선호 성별:</IonLabel>
          <IonSelect
            value={preferredGender}
            placeholder="선택하세요"
            onIonChange={(e) => setPreferredGender(e.detail.value)}
          >
            <IonSelectOption value="남성">남성</IonSelectOption>
            <IonSelectOption value="여성">여성</IonSelectOption>
            <IonSelectOption value="무관">무관</IonSelectOption>
          </IonSelect>
        </div>
      </IonContent>

      <IonContent className="ion-padding">
        <IonButton
          expand="full"
          onClick={submitForm}
          disabled={!isSubmitEnabled}
        >
          신청하기
        </IonButton>
        <IonModal
          ref={modal}
          isOpen={isModalOpen}
          onDidDismiss={closeModal}
          canDismiss={canDismiss}
        >
          <IonHeader>
            <IonToolbar>
              <IonTitle>Modal</IonTitle>
              <IonButtons slot="end">
                <IonModalButton onClick={() => dismiss()}>X</IonModalButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding">
            <h2>신청 완료!</h2>
            <p>요청하신 동행이 성공적으로 신청되었습니다.</p>
          </IonContent>
        </IonModal>
      </IonContent>
    </IonPage>
  );
};

export default UserRequest;
