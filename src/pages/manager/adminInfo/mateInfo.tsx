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
import {
  getMateList,
  getMateDetail,
  approveMate,
  unapproveMate,
  mateBlacklisted,
} from "../../../api/managerApi";
interface MateInfo {
  cid: string;
  mateId: number;
  mateName: string;
  registrationNum: string;
  blacklisted: boolean;
  mateStatus: string;
  mateGender?: string;
  email?: string;
  phoneNum?: string;
  approval?: boolean;
  imageAddress?: string;
}

const MateInfo: React.FC = () => {
  const [mateList, setMateList] = useState<MateInfo[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedMate, setSelectedMate] = useState<MateInfo | null>(null);
  const [rejectReason, setRejectReason] = useState("");
  const [mateDetail, setMateDetail] = useState<MateInfo | null>(null);
  const fetchUserList = async () => {
    getMateList().then((res: MateInfo[]) => {
      setMateList(res);
    });
  };
  useEffect(() => {
    fetchUserList();
  }, []);

  useEffect(() => {
    const fetchMateDetail = async () => {
      if (selectedMate) {
        getMateDetail(selectedMate.cid).then((res: MateInfo) => {
          setMateDetail(res);
        });
      }
    };
    fetchMateDetail();
  }, [selectedMate]);

  const openModal = (mate: MateInfo) => {
    setSelectedMate(mate);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const toggleBlacklist = (isBlacklisted, mateCid) => {
    if (selectedMate) {
      const { mateId, blacklisted } = selectedMate;

      // mateBlacklisted(selectedMate?.cid, !mateDetail?.blacklisted).then(
      //   (response: ApprovalResponse) => {
      //     console.log("서버 응답:", response);

      //     if (selectedMate && response.success) {
      //       setMateList((prevMateList) => {
      //         const updatedList = prevMateList.map((mate) =>
      //           mate.mateId === selectedMate.mateId
      //             ? { ...mate, blacklisted: !mate.blacklisted }
      //             : mate
      //         );

      //         return updatedList;
      //       });
      //       closeModal();
      //       console.log(response.message);
      //     } else {
      //       console.error(response.message);
      //     }
      //   }
      // );
      mateBlacklisted(mateCid, isBlacklisted ? false : true).then((res) => {
        fetchUserList();
      });
    }
  };
  interface ApprovalResponse {
    success: boolean;
    message: string;
  }

  const handleApproveClick = () => {
    const mateCid = selectedMate?.cid;

    if (mateCid) {
      approveMate(mateCid).then((response: ApprovalResponse) => {
        console.log("서버 응답:", response);

        if (selectedMate && response.success) {
          setMateList((prevMateList) => {
            return prevMateList.map((mate) =>
              mate.mateId === selectedMate.mateId
                ? { ...mate, approval: true, mateStatus: true }
                : mate
            );
          });
          closeModal();
          console.log(response.message);
        } else {
          console.error(response.message);
        }
      });
    }
  };
  const handleUnApproveClick = () => {
    const mateCid = selectedMate?.cid;
    if (mateCid) {
      unapproveMate(mateCid).then((response: ApprovalResponse) => {
        console.log("서버 응답:", response);

        if (selectedMate && response.success) {
          setMateList((prevMateList) => {
            return prevMateList.map((mate) =>
              mate.mateId === selectedMate.mateId
                ? { ...mate, approval: false, mateStatus: false }
                : mate
            );
          });
          closeModal();
          console.log(response.message);
        } else {
          console.error(response.message);
        }
      });
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
            .sort((a, b) => (a.mateStatus ? 1 : b.mateStatus ? -1 : 0))
            .sort((a, b) => (a.blacklisted ? 1 : b.blacklisted ? -1 : 0))
            .map((mate) => (
              <IonItem key={mate.mateId} button onClick={() => openModal(mate)}>
                <IonLabel style={{ display: "flex", alignItems: "center" }}>
                  <img
                    src={mate.imageAddress || DefaultAvatar}
                    alt="avatar"
                    style={{
                      width: "70px",
                      height: "70px",
                      borderRadius: "50%",
                      marginRight: "20px",
                    }}
                  />
                  <IonText>
                    {mate.mateId} <br />
                    {mate.mateName} / {mate.mateGender}
                    <p style={{ color: "red" }}>
                      {mate.blacklisted ? "Blocked" : ""}
                    </p>
                  </IonText>
                </IonLabel>
                <IonToggle
                  slot="end"
                  checked={!mate.blacklisted}
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleBlacklist(mate.blacklisted, mate.cid);
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

            {mateDetail && (
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
                      {mateDetail.mateName}
                    </IonCardTitle>
                  </div>
                </IonCardHeader>
                <IonCardContent>
                  <IonItem>
                    <IonLabel>이름:</IonLabel>
                    <IonText>{mateDetail.mateName}</IonText>
                  </IonItem>
                  <IonItem>
                    <IonLabel>주민번호:</IonLabel>
                    <IonText>{mateDetail.registrationNum}</IonText>
                  </IonItem>
                  <IonItem>
                    <IonLabel>성별:</IonLabel>
                    <IonText>{mateDetail.mateGender}</IonText>
                  </IonItem>
                  <IonItem>
                    <IonLabel>이메일:</IonLabel>
                    <IonText>{mateDetail.email}</IonText>
                  </IonItem>
                  <IonItem>
                    <IonLabel>전화번호:</IonLabel>
                    <IonText>{mateDetail.phoneNum}</IonText>
                  </IonItem>
                  <IonItem>
                    <IonLabel>가입승인여부:</IonLabel>
                    <IonText>
                      {mateDetail.mateStatus === "FAILED" ? (
                        <p style={{ color: "var(--ion-color-danger)" }}>
                          가입미승인
                        </p>
                      ) : (
                        <p style={{ color: "var(--ion-color-primary)" }}>
                          가입승인
                        </p>
                      )}
                    </IonText>
                  </IonItem>
                  <IonItem>
                    <IonLabel>메이트 상태:</IonLabel>
                    <IonText>
                      {mateDetail.blacklisted
                        ? "블랙리스트 메이트"
                        : "일반 메이트"}
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
                </IonCardContent>
              </IonCard>
            )}
            <IonButton
              onClick={handleApproveClick}
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
              onClick={handleUnApproveClick}
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
