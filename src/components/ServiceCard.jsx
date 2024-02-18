import {
  IonAlert,
  IonAvatar,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonLabel,
  IonModal,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { useEffect, useRef, useState } from "react";
import DefaultAvatar from "../assets/default_avatar.jpg";
import { Modal, Rate, Toast } from "antd-mobile";
import { useNavigate } from "react-router-dom";
import { userCancelService } from "../api/user";
import { mateFinish, waitingDetail } from "../api/mateApi";

const ServiceCard = ({ data, role, status, onAccept, onReload, onRate }) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [rate, setRate] = useState(0);
  const [datas, setDatas] = useState(data);

  const Contens = ({ isDetail }) => {
    const label = isDetail
      ? ["내용", "일정", "위치", "성별", "금액"]
      : ["내용", "일정", "위치"];

    const contentShow = (item) => {
      switch (item) {
        case "내용":
          return datas.content;
        case "일정":
          return role === "user"
            ? datas.date
            : datas.date + "/" + datas.startTime;
        case "위치":
          return role === "user" ? datas.location : datas.arrivalLoc;
        case "성별":
          return datas.gender;
        case "금액":
          return datas.cost;
        default:
          return datas.content;
      }
    };

    const oncancel = (id) => {
      const userCancel = () => {
        userCancelService(id).then((res) => {
          Toast.show({
            content: "성공적으로 취소되었습니다.",
          });
          setTimeout(() => {
            onReload();
          }, 1000);
        });
      };
      const mateCancel = () => {};

      role === "user" ? userCancel() : mateCancel();
    };

    const onFinish = (id) => {
      mateFinish(id).then((res) => {
        Toast.show({
          content: "완료되었습니다.",
        });
        setInterval(() => {
          onReload();
        }, 1000);
      });
    };
    const onDetailClick = () => {
      waitingDetail(data.careCid).then((res) => {
        setDatas(res);
      });
      setIsOpen(true);
    };
    return (
      <IonCard>
        <IonCardHeader>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <IonAvatar className="ion-margin-end">
              <img src={DefaultAvatar}></img>
            </IonAvatar>
            {(status === "proceeding" || status === "completed") && (
              <IonButton
                fill="clear"
                onClick={() => navigate("/mate/chatting")}
              >
                채팅
              </IonButton>
            )}
          </div>
        </IonCardHeader>

        <IonCardContent>
          {label.map((item, index) => {
            return (
              <div
                key={index}
                style={{ display: "flex", alignItems: "center" }}
                className="ion-margin"
              >
                <IonLabel>{item}</IonLabel>

                <div
                  style={{
                    display: "flex",
                    flex: 1,
                    borderRadius: "8px",
                    backgroundColor: "var(--ion-color-medium)",
                    padding: "5px",
                    color: "white",
                  }}
                  className="ion-margin-start"
                >
                  {contentShow(item)}
                </div>
              </div>
            );
          })}
        </IonCardContent>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            flexWrap: "wrap",
          }}
          className="ion-margin"
        >
          {!isDetail && role === "mate" && (
            <IonButton fill="clear" onClick={onDetailClick}>
              상세 내역
            </IonButton>
          )}

          {/* 유저 && 대기중 || 진행중 */}
          {((role === "user" && status === "waiting") ||
            status === "proceeding" ||
            status === "IN_PROGRESS") && (
            <IonButton fill="clear" onClick={() => oncancel(data.careCid)}>
              취소
            </IonButton>
          )}

          {role === "mate" && status === "IN_PROGRESS" && (
            <IonButton fill="clear" onClick={() => onFinish(data.careCid)}>
              완료
            </IonButton>
          )}
          {/* 메이트 && 완료 */}
          {role === "mate" && status === "HELP_DONE" && (
            <>
              <IonButton fill="clear">결제완료</IonButton>
              <IonButton fill="clear">결제미완</IonButton>
            </>
          )}

          {/* 메이트 && 대기중 */}
          {role === "mate" && status === "waiting" && (
            <IonButton
              fill="clear"
              onClick={() => {
                onAccept(data.careCid);
              }}
            >
              수락
            </IonButton>
          )}

          {/* 유저 && 완료 */}
          {role === "user" && status === "completed" && (
            <IonButton
              fill="clear"
              onClick={() => {
                Modal.show({
                  title: "오늘 동행해드린 메이트는 어떠셨나요?",
                  header: "평가해주세요!",
                  content: (
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <Rate
                        allowHalf
                        onChange={(v) => {
                          setRate(v);
                        }}
                      />
                    </div>
                  ),
                  closeOnMaskClick: true,
                  closeOnAction: true,
                  actions: [
                    {
                      key: "submit",
                      text: "제출하기",
                      primary: true,
                      onClick() {
                        onRate(data.careCid, rate);
                      },
                      style: {
                        backgroundColor: "var(--ion-color-primary)",
                        border: "none",
                      },
                    },
                  ],
                });
              }}
            >
              평가하기
            </IonButton>
          )}
        </div>
      </IonCard>
    );
  };

  return (
    <div>
      <Contens isDetail={false}></Contens>
      <IonModal isOpen={isOpen}>
        <IonHeader>
          <IonToolbar>
            <IonTitle></IonTitle>
            <IonButtons slot="end">
              <IonButton onClick={() => setIsOpen(false)}>Close</IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <Contens isDetail={true}></Contens>
        </IonContent>
      </IonModal>
    </div>
  );
};

export default ServiceCard;
