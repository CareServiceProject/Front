import {
  IonContent,
  IonHeader,
  IonMenu,
  IonPage,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import { Route } from "react-router-dom";
import UserHome from "./userHome";
import UserMyPage from "./userMy";
import SlideMenu from "../../components/SlideMenu.jsx";
import UserChatList from "./userChat";
import UserServiceList from "./userServiceList";

//유저 탭바
const User: React.FC = () => {
  return (
    <>
      {/* 햄버거 메뉴 */}
      {/* <SlideMenu></SlideMenu> */}
      {/* ----------- */}
      {/* <IonReactRouter>
        <IonTabs> */}
      {/* 탭 바 */}
      {/* <IonTabBar slot="bottom">
            <IonTabButton tab="home" href="/user/home">
              Home
            </IonTabButton>
            <IonTabButton tab="chatList" href="/user/chat">
              Chat
            </IonTabButton>
            <IonTabButton tab="myPage" href="/user/mypage">
              My Page
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter> */}
    </>
  );
};

export default User;
