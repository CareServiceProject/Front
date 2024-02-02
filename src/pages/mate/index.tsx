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
import UserHome from "../user/userHome";
import UserMyPage from "../user/userMy";
import { IonReactRouter } from "@ionic/react-router";
import SlideMenu from "../../components/SlideMenu.jsx";
import MateHome from "./mateHome";
import MateMy from "./mateMy";

//유저 탭바
const Mate: React.FC = () => {
  return (
    <>
      {/* 햄버거 메뉴 */}
      <SlideMenu></SlideMenu>
      {/* ----------- */}
      <IonReactRouter>
        <IonTabs>
          {/* 탭 바 */}
          <IonTabBar slot="bottom">
            <IonTabButton tab="home" href="/mate/home">
              Home
            </IonTabButton>
            <IonTabButton tab="myPage" href="/mate/mypage">
              My Page
            </IonTabButton>
          </IonTabBar>

          {/* 탭 페이지 */}
          <IonRouterOutlet>
            <Route path="/mate/home" render={() => <MateHome />}></Route>
            <Route path="/mate/mypage" render={() => <MateMy />}></Route>
            <Redirect exact path="/mate" to="/mate/home" />
          </IonRouterOutlet>
        </IonTabs>
      </IonReactRouter>
    </>
  );
};

export default Mate;
