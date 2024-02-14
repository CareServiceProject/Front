import {
  IonButtons,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonInput,
  IonCardTitle,
  IonCardContent,
  IonCardHeader,
  IonList,
  IonBackButton,
  IonModal,
  IonPage,
  IonIcon,
  IonTitle,
  IonToolbar,
  IonButton,
  IonToggle,
  IonCard,
  IonText,
} from "@ionic/react";
import DefaultAvatar from "../../../assets/default_avatar.jpg";
import React, { useState } from "react";
import { closeOutline } from "ionicons/icons";

interface MateInfo {
  id: number;
  nickname: string;
  name: string;
  residentNumber: string;
  blacklisted: boolean;
  approval: boolean;
  gender?: string;
  email?: string;
  phoneNumber?: string;
}

const MateInfo: React.FC = () => {
  const [mateList, setMateList] = useState<MateInfo[]>([
    {
      id: 1,
      nickname: "Mate ID 1",
      name: "라이언",
      residentNumber: "123456-1000000",
      approval: false,
      blacklisted: false,
      gender: "남성",
      email: "mate1@example.com",
      phoneNumber: "010-1234-5678",
    },
    {
      id: 2,
      nickname: "Mate ID 2",
      name: "어피치",
      residentNumber: "123456-2000000",
      approval: false,
      blacklisted: false,
      gender: "여성",
      email: "mate2@example.com",
      phoneNumber: "110-1234-5678",
    },
    {
      id: 3,
      nickname: "Mate ID 3",
      name: "신짱구",
      residentNumber: "223456-1000000",
      approval: false,
      blacklisted: false,
      gender: "여성",
      email: "mate3@example.com",
      phoneNumber: "210-1234-5678",
    },
    {
      id: 4,
      nickname: "Mate ID 4",
      name: "뽀로로",
      residentNumber: "323456-2000000",
      approval: false,
      blacklisted: false,
      gender: "남성",
      email: "mate4@example.com",
      phoneNumber: "310-1234-5678",
    },
    {
      id: 5,
      nickname: "Mate ID 5",
      name: "크로롱",
      residentNumber: "423456-1000000",
      approval: false,
      blacklisted: false,
      gender: "남성",
      email: "mate5@example.com",
      phoneNumber: "410-1234-5678",
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [selectedMate, setSelectedMate] = useState<MateInfo | null>(null);
  const [rejectReason, setRejectReason] = useState("");

  const openModal = (mate: MateInfo) => {
    setSelectedMate(mate);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const toggleBlacklist = () => {
    if (selectedMate) {
      setMateList((prevMateList) => {
        const updatedList = prevMateList.map((mate) =>
          mate.id === selectedMate.id
            ? { ...mate, blacklisted: !mate.blacklisted }
            : mate
        );

        return updatedList;
      });
      closeModal();
    }
  };

  const approveMate = () => {
    if (selectedMate) {
      setMateList((prevMateList) => {
        const updatedList = prevMateList.map((mate) =>
          mate.id === selectedMate.id ? { ...mate, approval: true } : mate
        );
        return updatedList;
      });
      closeModal();
    }
  };

  const rejectMate = () => {
    if (selectedMate) {
      setMateList((prevMateList) => {
        const updatedList = prevMateList.map((mate) =>
          mate.id === selectedMate.id ? { ...mate, approval: false } : mate
        );
        return updatedList;
      });
      closeModal();
    }
  };

  return (
    <IonPage id="main-menu">
      <IonHeader>
        <IonToolbar>
          {" "}
          <IonButtons slot="start">
            <IonBackButton defaultHref="/selectAdmin" />
          </IonButtons>
          <IonTitle>메이트 관리</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonList>
          {mateList
            .sort((a, b) => (a.approval ? 1 : b.approval ? -1 : 0))
            .sort((a, b) => (a.blacklisted ? 1 : b.blacklisted ? -1 : 0))
            .map((mate) => (
              <IonItem key={mate.id} button onClick={() => openModal(mate)}>
                <IonLabel style={{ display: "flex", alignItems: "center" }}>
                  <img
                    src={DefaultAvatar}
                    alt="avatar"
                    style={{
                      width: "70px",
                      height: "70px",
                      borderRadius: "50%",
                      marginRight: "20px",
                    }}
                  />
                  <IonText>
                    {mate.nickname} _{" "}
                    {mate.blacklisted ? "일반메이트" : "블랙리스트메이트"}
                    <br />
                    {mate.name} / {mate.gender}
                    <span style={{ color: mate.approval ? "blue" : "red" }}>
                      {mate.approval ? " 가입승인" : " 가입미승인"}
                    </span>
                  </IonText>
                </IonLabel>
                <IonToggle
                  slot="end"
                  checked={mate.blacklisted}
                  onClick={(e) => {
                    e.stopPropagation();
                    openModal(mate);
                  }}
                />
              </IonItem>
            ))}
        </IonList>

        <IonModal isOpen={showModal} onDidDismiss={closeModal}>
          <IonContent className="ion-text-center">
            <IonHeader>
              <IonToolbar>
                <IonButtons slot="start">
                  <IonButton onClick={closeModal}>
                    <IonIcon slot="icon-only" icon={closeOutline} />
                  </IonButton>
                </IonButtons>
              </IonToolbar>
            </IonHeader>

            {selectedMate && (
              <IonCard>
                <IonCardHeader>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <img
                      src={DefaultAvatar}
                      alt="avatar"
                      style={{
                        width: "70px",
                        height: "70px",
                        borderRadius: "50%",
                        margin: "20px 20px 0 20px",
                      }}
                    />
                    <IonCardTitle
                      style={{
                        margin: "20px 20px 0 10px",
                      }}
                    >
                      {selectedMate.nickname}
                    </IonCardTitle>
                  </div>
                </IonCardHeader>
                <IonCardContent>
                  <IonItem>
                    <IonLabel>이름:</IonLabel>
                    <IonText>{selectedMate.name}</IonText>
                  </IonItem>
                  <IonItem>
                    <IonLabel>주민번호:</IonLabel>
                    <IonText>{selectedMate.residentNumber}</IonText>
                  </IonItem>
                  <IonItem>
                    <IonLabel>성별:</IonLabel>
                    <IonText>{selectedMate.gender}</IonText>
                  </IonItem>
                  <IonItem>
                    <IonLabel>이메일:</IonLabel>
                    <IonText>{selectedMate.email}</IonText>
                  </IonItem>
                  <IonItem>
                    <IonLabel>전화번호:</IonLabel>
                    <IonText>{selectedMate.phoneNumber}</IonText>
                  </IonItem>
                  <IonItem>
                    <IonLabel>가입승인여부:</IonLabel>
                    <IonText>
                      {selectedMate.approval ? "가입승인" : "가입미승인"}
                    </IonText>
                  </IonItem>
                  <IonItem>
                    <IonLabel>메이트 상태:</IonLabel>
                    <IonText>
                      {selectedMate.blacklisted
                        ? "일반 메이트"
                        : "블랙리스트 메이트"}
                    </IonText>
                  </IonItem>
                  <IonItem lines="none">
                    <IonText>미승인시 사유:</IonText>
                  </IonItem>
                  <IonItem>
                    <IonInput
                      value={rejectReason}
                      onIonChange={(e) => setRejectReason(e.detail.value!)} // 입력 상태를 업데이트하는 함수
                      style={{
                        border: "1px solid #ccc",
                        borderRadius: "2px",
                        backgroundColor: "#f5f5f5",
                        marginBottom: "10px",
                      }}
                    ></IonInput>
                  </IonItem>

                  <IonToggle
                    checked={selectedMate.blacklisted}
                    onIonChange={toggleBlacklist}
                    style={{ margin: "20px 15px 20px 0", float: "right" }}
                  />
                </IonCardContent>
              </IonCard>
            )}
            <IonButton
              onClick={approveMate}
              style={{
                margin: "10px",
                width: "250px",
                fontSize: "1.5em",
                height: "50px",
              }}
            >
              승인
            </IonButton>
            <IonButton
              onClick={rejectMate}
              color="danger"
              style={{
                margin: "20px",
                width: "250px",
                fontSize: "1.5em",
                height: "50px",
              }}
            >
              미승인
            </IonButton>
          </IonContent>
        </IonModal>
      </IonContent>
    </IonPage>
  );
};

export default MateInfo;
