import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  IonPage,
  IonGrid,
  IonRow,
  IonCol,
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
  IonList,
  IonItem,
  IonBackButton,
  IonDatetimeButton,
  IonModal,
} from "@ionic/react";

const UserRequest: React.FC = () => {
  const router = useNavigate();

  const [selectedDate, setSelectedDate] = useState<string>(
    new Date().toISOString()
  );
  const [selectedStartTime, setSelectedStartTime] = useState<string>("00:00");
  const [selectedEndTime, setSelectedEndTime] = useState<string>("00:00");
  const [destination, setDestination] = useState("");
  const [pickupLocation, setPickupLocation] = useState("");
  const [serviceAmount, setServiceAmount] = useState("");
  const [preferredGender, setPreferredGender] = useState<number>(0);
  const [isSubmitEnabled, setIsSubmitEnabled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const areFieldsFilled =
      selectedDate &&
      selectedStartTime &&
      selectedEndTime &&
      destination.trim() !== "" &&
      pickupLocation.trim() !== "" &&
      serviceAmount.trim() !== "" &&
      preferredGender !== 0;

    setIsSubmitEnabled(areFieldsFilled);
  }, [
    selectedDate,
    selectedStartTime,
    selectedEndTime,
    destination,
    pickupLocation,
    serviceAmount,
    preferredGender,
  ]);

  const submitForm = () => {
    setIsOpen(true);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start" onClick={() => router(-1)}>
            <IonBackButton defaultHref="/"></IonBackButton>
          </IonButtons>
          <IonTitle>동행 서비스</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <IonList lines="none">
          <IonItem>
            <IonGrid>
              <IonRow>
                <IonCol size="1">
                  <IonLabel>날짜</IonLabel>
                </IonCol>
                {/* <IonDatetimeButton
                  datetime="date"
                  value={selectedDate}
                  onIonChange={(e) => setSelectedDate(e.detail.value!)}
                ></IonDatetimeButton>

                <IonModal keepContentsMounted={true}>
                  <IonDatetime id="date"></IonDatetime>
                </IonModal> */}
                <IonDatetime
                  presentation="date"
                  value={selectedDate}
                  onIonChange={(e) => setSelectedDate(e.detail.value!)}
                ></IonDatetime>
              </IonRow>
            </IonGrid>
          </IonItem>
          <div>
            <IonItem>
              <IonGrid>
                <IonRow>
                  <IonCol size="1">
                    <IonLabel>시작 시간</IonLabel>
                  </IonCol>
                  <IonCol size="9">
                    <IonDatetime
                      presentation="time"
                      value={selectedStartTime}
                      onIonChange={(e) => setSelectedStartTime(e.detail.value!)}
                    ></IonDatetime>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonItem>

            <IonItem>
              <IonGrid>
                <IonRow>
                  <IonCol size="1">
                    <IonLabel>종료 시간</IonLabel>
                  </IonCol>
                  <IonCol size="9">
                    <IonDatetime
                      presentation="time"
                      value={selectedEndTime}
                      onIonChange={(e) => setSelectedEndTime(e.detail.value!)}
                      min={selectedStartTime}
                    ></IonDatetime>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonItem>
          </div>

          <IonItem>
            <IonGrid>
              <IonRow>
                <IonCol size="1">
                  <IonLabel>목적지</IonLabel>
                </IonCol>
                <IonCol size="9">
                  <IonInput
                    type="text"
                    fill="outline"
                    value={destination}
                    onIonChange={(e) => setDestination(e.detail.value!)}
                  />
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonItem>

          <IonItem>
            <IonGrid>
              <IonRow>
                <IonCol size="1">
                  <IonLabel>픽업장소</IonLabel>
                </IonCol>
                <IonCol size="1">
                  <IonInput
                    type="text"
                    fill="outline"
                    value={pickupLocation}
                    onIonChange={(e) => setPickupLocation(e.detail.value!)}
                    labelPlacement="floating"
                  ></IonInput>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonItem>
          <div>
            <IonItem>
              <IonGrid>
                <IonRow>
                  <IonCol size="1">
                    <IonLabel>서비스금액</IonLabel>
                  </IonCol>
                  <IonCol size="4">
                    <IonInput
                      type="number"
                      fill="outline"
                      value={serviceAmount}
                      onIonChange={(e) => setServiceAmount(e.detail.value!)}
                    />
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonItem>

            <IonItem>
              <IonGrid>
                <IonRow>
                  <IonCol size="1">
                    <IonLabel>선호 성별</IonLabel>
                  </IonCol>

                  <IonSelect
                    interface="popover"
                    fill="outline"
                    value={preferredGender}
                    onIonChange={(e) => setPreferredGender(e.detail.value)}
                  >
                    <IonSelectOption value={1}>여</IonSelectOption>
                    <IonSelectOption value={2}>남</IonSelectOption>
                    <IonSelectOption value={3}>무관</IonSelectOption>
                  </IonSelect>
                </IonRow>
              </IonGrid>
            </IonItem>
          </div>
        </IonList>
      </IonContent>

      <IonContent className="ion-padding">
        <IonButton onClick={submitForm} disabled={!isSubmitEnabled}>
          신청하기
        </IonButton>
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

// import React, { useState, useRef, useEffect } from "react";
// import {
//   IonPage,
//   IonHeader,
//   IonToolbar,
//   IonTitle,
//   IonContent,
//   IonDatetime,
//   IonButton,
//   IonInput,
//   IonLabel,
//   IonSelect,
//   IonSelectOption,
//   IonAlert,
//   IonModal,
//   IonButtons,
//   IonButton as IonModalButton,
// } from "@ionic/react";
// import { useNavigate } from "react-router-dom";
// import DatePicker from "react-datepicker";
// import TimePicker from "react-time-picker";
// import "react-datepicker/dist/react-datepicker.css";

// const UserRequest: React.FC = () => {
//   const [date, setDate] = useState(new Date());
//   const [selectedDate, setSelectedDate] = useState(new Date());
//   const [startTime, setStartTime] = useState("00:00");
//   const [endTime, setEndTime] = useState("00:00");
//   const [destination, setDestination] = useState("");
//   const [pickupLocation, setPickupLocation] = useState("");
//   const [serviceAmount, setServiceAmount] = useState("");
//   const [preferredGender, setPreferredGender] = useState("");
//   const [isSubmitEnabled, setIsSubmitEnabled] = useState(false);
//   const [isOpen, setIsOpen] = useState(false);

//   const generateHourOptions = () => {
//     const hours = [];
//     for (let i = 0; i < 24; i++) {
//       const hour = i < 10 ? `0${i}` : `${i}`;
//       hours.push(
//         <IonSelectOption key={hour} value={hour}>
//           {hour}
//         </IonSelectOption>
//       );
//     }
//     return hours;
//   };

//   const generateMinuteOptions = () => {
//     const minutes = [];
//     for (let i = 0; i < 60; i += 5) {
//       const minute = i < 10 ? `0${i}` : `${i}`;
//       minutes.push(
//         <IonSelectOption key={minute} value={minute}>
//           {minute}
//         </IonSelectOption>
//       );
//     }
//     return minutes;
//   };

//   useEffect(() => {
//     const areFieldsFilled =
//       date &&
//       startTime &&
//       endTime &&
//       destination.trim() !== "" &&
//       pickupLocation.trim() !== "" &&
//       serviceAmount.trim() !== "" &&
//       preferredGender.trim() !== "";

//     setIsSubmitEnabled(areFieldsFilled);
//   }, [
//     date,
//     startTime,
//     endTime,
//     destination,
//     pickupLocation,
//     serviceAmount,
//     preferredGender,
//   ]);

//   const submitForm = () => {
//     setIsOpen(true);
//   };

//   return (
//     <IonPage>
//       <IonHeader>
//         <IonToolbar>
//           <IonTitle>동행 서비스</IonTitle>
//         </IonToolbar>
//       </IonHeader>
//       <IonContent className="ion-padding">
//         <div>
//           <label>날짜:</label>
//           <DatePicker
//             selected={date}
//             onChange={(date) => setSelectedDate(selectedDate)}
//           />
//         </div>

//         {/* s
//         <div>
//           <label>시작 시간:</label>
//           <TimePicker
//             value={startTime}
//             onChange={(time) => setStartTime(time)}
//           />
//         </div>

//         <div>
//           <label>종료 시간:</label>
//           <TimePicker value={endTime} onChange={(time) => setEndTime(time)} />
//         </div> */}

//         {/* <div>
//           <label>시작 시간:</label>
//           <IonSelect
//             placeholder="시작 시간을 선택하세요"
//             value={startTime}
//             onIonChange={(e) => setStartTime(e.detail.value)}
//           >
//             <IonSelectOption value="00:00">00:00</IonSelectOption>
//             <IonSelectOption value="01:00">01:00</IonSelectOption>
//           </IonSelect>
//         </div>

//         <div>
//           <label>종료 시간:</label>
//           <IonSelect
//             placeholder="종료 시간을 선택하세요"
//             value={endTime}
//             onIonChange={(e) => setEndTime(e.detail.value)}
//           >
//             <IonSelectOption value="00:00">00:00</IonSelectOption>
//             <IonSelectOption value="01:00">01:00</IonSelectOption>
//           </IonSelect>
//         </div> */}

//         <div>
//           <label>시작 시간:</label>
//           <IonSelect
//             placeholder="시를 선택하세요"
//             value={startTime.split(":")[0]}
//             onIonChange={(e) =>
//               setStartTime(`${e.detail.value}:${startTime.split(":")[1]}`)
//             }
//           >
//             {generateHourOptions()}
//           </IonSelect>

//           <IonSelect
//             placeholder="분을 선택하세요"
//             value={startTime.split(":")[1]}
//             onIonChange={(e) =>
//               setStartTime(`${startTime.split(":")[0]}:${e.detail.value}`)
//             }
//           >
//             {generateMinuteOptions()}
//           </IonSelect>
//         </div>

//         <div>
//           <label>종료 시간:</label>
//           <IonSelect
//             placeholder="시를 선택하세요"
//             value={endTime.split(":")[0]}
//             onIonChange={(e) =>
//               setEndTime(`${e.detail.value}:${endTime.split(":")[1]}`)
//             }
//           >
//             {generateHourOptions()}
//           </IonSelect>

//           <IonSelect
//             placeholder="분을 선택하세요"
//             value={endTime.split(":")[1]}
//             onIonChange={(e) =>
//               setEndTime(`${endTime.split(":")[0]}:${e.detail.value}`)
//             }
//           >
//             {generateMinuteOptions()}
//           </IonSelect>
//         </div>

//         <div>
//           <IonLabel>목적지:</IonLabel>
//           <IonInput
//             type="text"
//             value={destination}
//             onIonChange={(e) => setDestination(e.detail.value!)}
//           />
//         </div>

//         <div>
//           <IonLabel>픽업장소:</IonLabel>
//           <IonInput
//             type="text"
//             value={pickupLocation}
//             onIonChange={(e) => setPickupLocation(e.detail.value!)}
//           />
//         </div>

//         <div>
//           <IonLabel>서비스금액:</IonLabel>
//           <IonInput
//             type="text"
//             value={serviceAmount}
//             onIonChange={(e) => setServiceAmount(e.detail.value!)}
//           />
//         </div>

//         <div>
//           <IonLabel>선호 성별:</IonLabel>
//           <IonSelect
//             value={preferredGender}
//             placeholder="선택하세요"
//             onIonChange={(e) => setPreferredGender(e.detail.value)}
//           >
//             <IonSelectOption value="남성">남성</IonSelectOption>
//             <IonSelectOption value="여성">여성</IonSelectOption>
//             <IonSelectOption value="무관">무관</IonSelectOption>
//           </IonSelect>
//         </div>
//       </IonContent>

//       <IonContent className="ion-padding">
//         <IonButton onClick={submitForm} disabled={!isSubmitEnabled}>
//           신청하기
//         </IonButton>
//         <IonAlert
//           isOpen={isOpen}
//           header="신청 완료!"
//           subHeader="요청하신 동행이 성공적으로 신청 완료되었습니다."
//           buttons={["닫기"]}
//           onDidDismiss={() => setIsOpen(false)}
//         ></IonAlert>
//       </IonContent>
//     </IonPage>
//   );
// };

// export default UserRequest;
