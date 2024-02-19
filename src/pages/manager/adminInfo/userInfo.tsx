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
import {
  getUserList,
  getUserDetail,
  userBlacklisted,
} from "../../../api/managerApi";

interface UserInfo {
  cid: string;
  userId: string;
  userName: string;
  blacklisted: boolean;
  userGender?: string;
  email: string;
  phone: string;
  imageAddress: string;
}

const UserInfo: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState<UserInfo | null>(null);
  const [userList, setUserList] = useState<UserInfo[]>([]);
  const [userDetail, setUserDetail] = useState<UserInfo | null>(null);
  const fetchUserList = async () => {
    getUserList().then((res: UserInfo[]) => {
      console.log(res);
      setUserList(res);
    });
  };
  useEffect(() => {
    fetchUserList();
  }, []);

  useEffect(() => {
    const fetchUserDetail = async () => {
      if (selectedUser) {
        getUserDetail(selectedUser.cid).then((res: UserInfo) => {
          console.log(res);
          setUserDetail(res);
        });
      }
    };

    fetchUserDetail();
  }, [selectedUser]);

  const openModal = (user: UserInfo) => {
    setSelectedUser(user);
    setUserDetail(user);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const toggleBlacklist = (isBlacklisted: boolean, userCid: string) => {
    userBlacklisted(userCid, isBlacklisted ? false : true).then(() => {
      fetchUserList();
    });
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
                  src={user.imageAddress || DefaultAvatar}
                  alt="avatar"
                  style={{
                    width: "70px",
                    height: "70px",
                    borderRadius: "50%",
                    marginRight: "20px",
                  }}
                />
                <IonText>
                  {user.userId} <br />
                  {user.userName} / {user.userGender}{" "}
                  {user.blacklisted ? (
                    <p style={{ color: "red" }}>Blocked</p>
                  ) : null}
                </IonText>
              </IonLabel>
              <IonToggle
                slot="end"
                checked={!user.blacklisted}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleBlacklist(user.blacklisted, user.cid);
                }}
              />
            </IonItem>
          ))}
        </IonList>

        <IonModal isOpen={showModal} onDidDismiss={closeModal}>
          <IonContent>
            {userDetail && userDetail ? (
              <IonCard>
                <IonCardHeader>
                  <IonCardTitle>{userDetail.userId}</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <IonItem>
                    <IonLabel>이름:</IonLabel>
                    <IonText>{userDetail.userName}</IonText>
                  </IonItem>
                  <IonItem>
                    <IonLabel>성별:</IonLabel>
                    <IonText>{userDetail.userGender}</IonText>
                  </IonItem>
                  <IonItem>
                    <IonLabel>이메일:</IonLabel>
                    <IonText>{userDetail.email}</IonText>
                  </IonItem>
                  <IonItem>
                    <IonLabel>전화번호:</IonLabel>
                    <IonText>{userDetail.phone}</IonText>
                  </IonItem>
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
