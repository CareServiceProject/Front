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
import { Redirect, Route } from "react-router-dom";
import UserHome from "./userHome";
import UserMyPage from "./userMy";
import { IonReactRouter } from "@ionic/react-router";
import SlideMenu from "../../components/SlideMenu.jsx";
import UserChatList from "./userChat";

//유저 탭바
const User: React.FC = () => {
  return (
    <>
      {/* 햄버거 메뉴 */}
      <SlideMenu></SlideMenu>
      {/* ----------- */}
      <IonReactRouter>
        <IonTabs>
          {/* 탭 바 */}
          <IonTabBar slot="bottom">
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

          {/* 탭 페이지 */}
          <IonRouterOutlet>
            <Route path="/user/home" render={() => <UserHome />}></Route>
            <Route path="/user/mypage" render={() => <UserMyPage />}></Route>
            <Route path="/user/chat" render={() => <UserChatList />}></Route>
            <Redirect exact path="/user" to="/user/home" />
          </IonRouterOutlet>
        </IonTabs>
      </IonReactRouter>
    </>
  );
};

export default User;
