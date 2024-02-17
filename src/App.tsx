import { Route, Routes } from "react-router-dom";
import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import Login from "./pages/login/Login";
import Register from "./pages/register";
import SignUpForm from "./pages/register/formPage";
import UserHome from "./pages/user/userHome";
import UserChatList from "./pages/user/userChat";
import UserMy from "./pages/user/userMy";
import UserServiceList from "./pages/user/userServiceList";
import NavLayout from "./layout/NavLayout";
import MateMy from "./pages/mate/mateMy";
import MateHome from "./pages/mate/mateHome";
import MateChatList from "./pages/mate/mateChat";
import SelectAdmin from "./pages/manager/selectAdmin";
import UserInfo from "./pages/manager/adminInfo/userInfo";
import MateInfo from "./pages/manager/adminInfo/mateInfo";
import Chatting from "./pages/mate/mateChat/chatting";
import UserRequest from "./pages/user/userRequest";
import UserProfile from "./pages/user/userProfile";
import MateJudge from "./pages/mate/mateJudge";
import MatePass from "./pages/mate/mateJudge/pass";
import MateFail from "./pages/mate/mateJudge/fail";
import WaitingList from "./pages/mate/mateHome/WaitingList";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/signup" element={<SignUpForm />} />
      <Route path="/user/mypage/service_list" element={<UserServiceList />} />
      <Route path="/mate/mypage/service_list" element={<UserServiceList />} />
      <Route path="/selectAdmin" element={<SelectAdmin />} />
      <Route path="/userInfo" element={<UserInfo />} />
      <Route path="/mateInfo" element={<MateInfo />} />
      <Route path="/mate/chatting" element={<Chatting />} />
      <Route path="/user/request" element={<UserRequest />} />
      <Route path="/waitingList" element={<WaitingList />} />

      {/* NavBar Contained Page */}
      <Route element={<NavLayout />}>
        <Route path="/user/home" element={<UserHome />} />
        <Route path="/user/mypage" element={<UserMy />} />
        <Route path="/user/chat" element={<UserChatList />} />
        <Route path="/mate/home" element={<MateHome />} />
        <Route path="/mate/Judge" element={<MateJudge />} />
        <Route path="/mate/Pass" element={<MatePass />} />
        <Route path="/mate/Fail" element={<MateFail />} />
        <Route path="/mate/chat" element={<MateChatList />} />
        <Route path="/mate/mypage" element={<MateMy />} />
      </Route>
    </Routes>
  </IonApp>
);

export default App;
