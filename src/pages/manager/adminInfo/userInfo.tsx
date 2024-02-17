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
import React, { useState, useEffect } from "react";

interface UserInfo {
  userId: string;
  userCid: string;
  // nickname: string;
  userName: string;
  blacklisted: boolean;
  userGender?: string;
  email?: string;
  phone?: string;
}

const UserInfo: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState<UserInfo | null>(null);
  const [userList, setUserList] = useState<UserInfo[]>([]);
  const [userDetail, setUserDetail] = useState<UserInfo | null>(null);

  // const [userList, setUserList] = useState<UserInfo[]>([
  //   {
  //     id: 1,
  //     nickname: "User ID 1",
  //     name: "라이언",
  //     blacklisted: false,
  //     gender: "남성",
  //     email: "user1@example.com",
  //     phoneNumber: "010-1234-5678",
  //   },
  //   {
  //     id: 2,
  //     nickname: "User ID 2",
  //     name: "어피치",
  //     blacklisted: false,
  //     gender: "여성",
  //     email: "user2@example.com",
  //     phoneNumber: "110-1234-5678",
  //   },
  //   {
  //     id: 3,
  //     nickname: "User ID 3",
  //     name: "신짱구",
  //     blacklisted: false,
  //     gender: "여성",
  //     email: "user3@example.com",
  //     phoneNumber: "210-1234-5678",
  //   },
  //   {
  //     id: 4,
  //     nickname: "User ID 4",
  //     name: "뽀로로",
  //     blacklisted: false,
  //     gender: "남성",
  //     email: "user4@example.com",
  //     phoneNumber: "310-1234-5678",
  //   },
  //   {
  //     id: 5,
  //     nickname: "User ID 5",
  //     name: "크로롱",
  //     blacklisted: false,
  //     gender: "남성",
  //     email: "user5@example.com",
  //     phoneNumber: "410-1234-5678",
  //   },
  // ]);
  useEffect(() => {
    const fetchUserList = async () => {
      try {
        const serverUrl = "http://43.203.89.178:8080";
        const apiEndpoint = "/api/master/user";

        const response = await fetch(`${serverUrl}${apiEndpoint}`);
        const data = await response.json();

        setUserList(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserList();
  }, []);

  useEffect(() => {
    const fetchUserDetail = async () => {
      try {
        if (selectedUser) {
          const serverUrl = "http://43.203.89.178:8080";
          const apiEndpoint = `/api/master/user/${selectedUser.userCid}`;

          const response = await fetch(`${serverUrl}${apiEndpoint}`);
          // 만약에 해당 유저 ID에 대한 정보가 없을 경우 404 에러가 날 수 있습니다.
          if (response.ok) {
            const data = await response.json();
            setUserDetail(data);
          } else {
            // API에서 404 Not Found를 반환하면 setUserDetail을 null로 설정하여 모달에서 에러를 처리할 수 있도록 합니다.
            setUserDetail(null);
          }
        }
      } catch (error) {
        console.error("Error fetching user detail:", error);
      }
    };

    fetchUserDetail();
  }, [selectedUser]);

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
          user.userId === selectedUser.userId
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
            <IonItem key={user.userId} button onClick={() => openModal(user)}>
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
                  {user.userId} _{" "}
                  {user.blacklisted ? "일반유저" : "블랙리스트유저"}
                  <br />
                  {user.userName} / {user.userGender}{" "}
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
            {selectedUser && userDetail ? (
              <IonCard>
                <IonCardHeader>
                  <IonCardTitle>{selectedUser.userId}</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <IonItem>
                    <IonLabel>이름:</IonLabel>
                    <IonText>{selectedUser.userName}</IonText>
                  </IonItem>
                  <IonItem>
                    <IonLabel>성별:</IonLabel>
                    <IonText>{selectedUser.userGender}</IonText>
                  </IonItem>
                  <IonItem>
                    <IonLabel>이메일:</IonLabel>
                    <IonText>{selectedUser.email}</IonText>
                  </IonItem>
                  <IonItem>
                    <IonLabel>전화번호:</IonLabel>
                    <IonText>{selectedUser.phone}</IonText>
                  </IonItem>
                  <IonItem>
                    <IonLabel>유저 상태:</IonLabel>
                    <IonText>
                      {selectedUser.blacklisted
                        ? "일반 유저"
                        : "블랙리스트 유저"}
                    </IonText>
                  </IonItem>
                  <IonToggle
                    checked={selectedUser.blacklisted}
                    onIonChange={toggleBlacklist}
                    style={{ margin: "20px 10px 20px 0", float: "right" }}
                  />
                </IonCardContent>
              </IonCard>
            ) : (
              <div>유저 정보를 불러올 수 없습니다.</div>
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
