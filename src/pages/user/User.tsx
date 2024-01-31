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
import UserHome from "../userHome";
import UserMyPage from "../userMy";
import { IonReactRouter } from "@ionic/react-router";

//유저 탭바
const User: React.FC = () => {
  return (
    <>
      <IonReactRouter>
        <IonTabs>
          <IonTabBar slot="bottom">
            <IonTabButton tab="1" href="/user/home">
              Home
            </IonTabButton>
            <IonTabButton tab="2" href="/user/mypage">
              My Page
            </IonTabButton>
          </IonTabBar>

          <IonRouterOutlet>
            <Route path="/user/home" render={() => <UserHome />}></Route>
            <Route path="/user/mypage" component={UserMyPage}></Route>

            <Redirect exact path="/user" to="/user/home" />
          </IonRouterOutlet>
        </IonTabs>
      </IonReactRouter>
    </>
  );
};

export default User;
