import {
  IonButtons,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonCardTitle,
  IonCardContent,
  IonCardHeader,
  IonList,
  IonBackButton,
  IonModal,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonToggle,
  IonCard,
  IonText,
} from "@ionic/react";
import DefaultAvatar from "../../../assets/default_avatar.jpg";
import React, { useState } from "react";

interface UserInfo {
  id: number;
  nickname: string;
  name: string;
  blacklisted: boolean;
  gender?: string;
  email?: string;
  phoneNumber?: string;
}

const UserInfo: React.FC = () => {
  const [userList, setUserList] = useState<UserInfo[]>([
    {
      id: 1,
      nickname: "User ID 1",
      name: "라이언",
      blacklisted: false,
      gender: "남성",
      email: "user1@example.com",
      phoneNumber: "010-1234-5678",
    },
    {
      id: 2,
      nickname: "User ID 2",
      name: "어피치",
      blacklisted: false,
      gender: "여성",
      email: "user2@example.com",
      phoneNumber: "110-1234-5678",
    },
    {
      id: 3,
      nickname: "User ID 3",
      name: "신짱구",
      blacklisted: false,
      gender: "여성",
      email: "user3@example.com",
      phoneNumber: "210-1234-5678",
    },
    {
      id: 4,
      nickname: "User ID 4",
      name: "뽀로로",
      blacklisted: false,
      gender: "남성",
      email: "user4@example.com",
      phoneNumber: "310-1234-5678",
    },
    {
      id: 5,
      nickname: "User ID 5",
      name: "크로롱",
      blacklisted: false,
      gender: "남성",
      email: "user5@example.com",
      phoneNumber: "410-1234-5678",
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState<UserInfo | null>(null);

  const openModal = (user: UserInfo) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const toggleBlacklist = () => {
    if (selectedUser) {
      setUserList((prevUserList) => {
        const updatedList = prevUserList.map((user) =>
          user.id === selectedUser.id
            ? { ...user, blacklisted: !user.blacklisted }
            : user
        );

        // 토글된 항목을 리스트의 맨 아래로 이동
        updatedList.sort((a, b) =>
          a.blacklisted ? 1 : b.blacklisted ? -1 : 0
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
          <IonTitle>유저 관리</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonList>
          {userList.map((user) => (
            <IonItem key={user.id} button onClick={() => openModal(user)}>
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
                  {user.nickname} _{" "}
                  {user.blacklisted ? "블랙리스트유저" : "일반유저"}
                  <br />
                  {user.name} / {user.gender}{" "}
                </IonText>
              </IonLabel>
              <IonToggle
                slot="end"
                checked={user.blacklisted}
                onClick={(e) => {
                  e.stopPropagation();
                  openModal(user);
                }}
              />
            </IonItem>
          ))}
        </IonList>

        <IonModal isOpen={showModal} onDidDismiss={closeModal}>
          <IonContent>
            {selectedUser && (
              <IonCard>
                <IonCardHeader>
                  <IonCardTitle>{selectedUser.nickname}</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <IonItem>
                    <IonLabel>이름:</IonLabel>
                    <IonText>{selectedUser.name}</IonText>
                  </IonItem>
                  <IonItem>
                    <IonLabel>성별:</IonLabel>
                    <IonText>{selectedUser.gender}</IonText>
                  </IonItem>
                  <IonItem>
                    <IonLabel>이메일:</IonLabel>
                    <IonText>{selectedUser.email}</IonText>
                  </IonItem>
                  <IonItem>
                    <IonLabel>전화번호:</IonLabel>
                    <IonText>{selectedUser.phoneNumber}</IonText>
                  </IonItem>
                  <IonItem>
                    <IonLabel>유저 상태:</IonLabel>
                    <IonText>
                      {selectedUser.blacklisted
                        ? "블랙리스트 유저"
                        : "일반 유저"}
                    </IonText>
                  </IonItem>
                  <IonToggle
                    checked={selectedUser.blacklisted}
                    onIonChange={toggleBlacklist}
                    style={{ margin: "20px 10px 20px 0", float: "right" }}
                  />
                </IonCardContent>
              </IonCard>
            )}
            <IonButton
              onClick={closeModal}
              style={{ float: "right", margin: "10px 20px" }}
            >
              닫기
            </IonButton>
          </IonContent>
        </IonModal>
      </IonContent>
    </IonPage>
  );
};

export default UserInfo;
