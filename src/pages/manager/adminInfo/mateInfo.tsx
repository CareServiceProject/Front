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
import React, { useState, useEffect } from "react";
import { closeOutline } from "ionicons/icons";
import { getMateList } from "../../../api/managerApi";
interface MateInfo {
  mateId: number;
  mateName: string;
  residentNumber: string;
  blacklisted: boolean;
  approval: boolean;
  mateGender?: string;
  email?: string;
  phoneNumber?: string;
}

const MateInfo: React.FC = () => {
  const [mateList, setMateList] = useState<MateInfo[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedMate, setSelectedMate] = useState<MateInfo | null>(null);
  const [rejectReason, setRejectReason] = useState("");

  useEffect(() => {
    const fetchUserList = async () => {
      getMateList().then((res: MateInfo[]) => {
        console.log(res);
        setMateList(res);
      });
    };

    fetchUserList();
  }, []);
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
          mate.mateId === selectedMate.mateId
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
          mate.mateId === selectedMate.mateId
            ? { ...mate, approval: true }
            : mate
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
          mate.mateId === selectedMate.mateId
            ? { ...mate, approval: false }
            : mate
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
              <IonItem key={mate.mateId} button onClick={() => openModal(mate)}>
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
                    {mate.mateId} _{" "}
                    {mate.blacklisted ? "일반메이트" : "블랙리스트메이트"}
                    <br />
                    {mate.mateName} / {mate.mateGender}
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
                      {selectedMate.mateName}
                    </IonCardTitle>
                  </div>
                </IonCardHeader>
                <IonCardContent>
                  <IonItem>
                    <IonLabel>이름:</IonLabel>
                    <IonText>{selectedMate.mateName}</IonText>
                  </IonItem>
                  <IonItem>
                    <IonLabel>주민번호:</IonLabel>
                    <IonText>{selectedMate.residentNumber}</IonText>
                  </IonItem>
                  <IonItem>
                    <IonLabel>성별:</IonLabel>
                    <IonText>{selectedMate.mateGender}</IonText>
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
                      onIonChange={(e) => setRejectReason(e.detail.value!)}
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
