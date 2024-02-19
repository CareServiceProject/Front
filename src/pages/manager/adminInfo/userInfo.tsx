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
  isBlacklisted: boolean;
  userGender?: string;
  email: string;
  phone: string;
}

const UserInfo: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState<UserInfo | null>(null);
  const [userList, setUserList] = useState<UserInfo[]>([]);
  const [userDetail, setUserDetail] = useState<UserInfo | null>(null);

  useEffect(() => {
    const fetchUserList = async () => {
      getUserList().then((res: UserInfo[]) => {
        console.log(res);
        setUserList(res);
      });
    };

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
  interface ApprovalResponse {
    success: boolean;
    message: string;
  }
  const toggleBlacklist = () => {
    if (selectedUser) {
      const { userId } = selectedUser;

      userBlacklisted(selectedUser?.cid, !userDetail?.isBlacklisted).then(
        (response: ApprovalResponse) => {
          console.log("서버 응답:", response);

          if (selectedUser && response.success) {
            setUserList((prevUserList) => {
              const updatedList = prevUserList.map((user) =>
                user.userId === selectedUser.userId
                  ? { ...user, blacklisted: !user.isBlacklisted }
                  : user
              );

              return updatedList;
            });

            // 상태 업데이트
            setUserDetail((prevUserDetail) => {
              if (!prevUserDetail) {
                return prevUserDetail;
              }

              return {
                ...prevUserDetail,
                isBlacklisted: !prevUserDetail.isBlacklisted,
              };
            });
            console.log(response.message);
          } else {
            console.error(response.message);
          }
        }
      );
    }
  };
  // const toggleBlacklist = () => {
  //   if (selectedUser) {
  //     const newBlacklistedState = !selectedUser.isBlacklisted;

  //     // 서버에 새로운 블랙리스트 상태를 전송
  //     userBlacklisted(selectedUser.cid, newBlacklistedState).then(() => {
  //       setUserList((prevUserList) => {
  //         const updatedList = prevUserList.map((user) =>
  //           user.userId === selectedUser.userId
  //             ? { ...user, blacklisted: newBlacklistedState }
  //             : user
  //         );
  //         updatedList.sort((a, b) =>
  //           a.isBlacklisted ? 1 : b.isBlacklisted ? -1 : 0
  //         );

  //         return updatedList;
  //       });
  //       closeModal();
  //     });
  //   }
  // };

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
                  {user.isBlacklisted ? "일반유저" : "블랙리스트유저"}
                  <br />
                  {user.userName} / {user.userGender}{" "}
                </IonText>
              </IonLabel>
              <IonToggle
                slot="end"
                checked={user.isBlacklisted}
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
                  <IonItem>
                    <IonLabel>유저 상태:</IonLabel>
                    <IonText>
                      {userDetail.isBlacklisted
                        ? "일반 유저"
                        : "블랙리스트 유저"}
                    </IonText>
                  </IonItem>
                  <IonToggle
                    checked={userDetail.isBlacklisted}
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
