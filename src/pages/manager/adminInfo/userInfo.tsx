import {
  IonButtons,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonMenuButton,
  IonModal,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonToggle,
} from "@ionic/react";
import React, { useState } from "react";

interface UserInfo {
  id: number;
  name: string;
  details: string;
  blacklisted: boolean;
}

const UserInfoComponent: React.FC = () => {
  const [userList, setUserList] = useState<UserInfo[]>([
    {
      id: 1,
      name: "User 1",
      details: "Details for User 1",
      blacklisted: false,
    },
    {
      id: 2,
      name: "User 2",
      details: "Details for User 2",
      blacklisted: false,
    },
    {
      id: 3,
      name: "User 3",
      details: "Details for User 3",
      blacklisted: false,
    },
    {
      id: 4,
      name: "User 4",
      details: "Details for User 4",
      blacklisted: false,
    },
    {
      id: 5,
      name: "User 5",
      details: "Details for User 5",
      blacklisted: false,
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
          <IonButtons slot="end">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>유저 관리</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonList>
          {userList.map((user) => (
            <IonItem key={user.id} button onClick={() => openModal(user)}>
              <IonLabel>{user.name}</IonLabel>
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
              <>
                <IonLabel>{selectedUser.name}</IonLabel>
                <IonLabel>{selectedUser.details}</IonLabel>
                <IonToggle
                  checked={selectedUser.blacklisted}
                  onIonChange={toggleBlacklist}
                  style={{ margin: "10px 0" }}
                />
              </>
            )}
            <IonButton onClick={closeModal}>닫기</IonButton>
          </IonContent>
        </IonModal>
      </IonContent>
    </IonPage>
  );
};

export default UserInfoComponent;
