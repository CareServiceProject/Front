import { IonButton, IonContent, IonInput, IonPage } from "@ionic/react";
import React, { useState } from "react";
import "./login.css";
import Logo from "../../components/Logo";
import { useNavigate } from "react-router-dom";
import { login } from "../../api/authApi";
import { localToken } from "../../utils/auth";

const Login = () => {
  const navigate = useNavigate();
  const [userid, setUserid] = useState("");
  const [password, setPassword] = useState("");
  const doLogin = (e) => {
    e.preventDefault();
    const data = {
      user_id: userid,
      password,
    };
    login(data).then((res) => {
      localToken.set(res.access_token);
      switch (res.roles) {
        case "ROLE_MASTER":
          navigate("/selectAdmin");
          break;
        case "ROLE_USER":
          navigate("/user/home");
          break;
        case "ROLE_MATE":
          navigate("/mate/home");
          break;
        default:
          break;
      }
    });
  };

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };
  return (
    <div style={{ backgroundColor: "#005F69" }}>
      <IonPage>
        <IonContent className="ion-padding login">
          <Logo></Logo>
          <form onSubmit={doLogin}>
            <IonInput
              label="User ID"
              labelPlacement="start"
              placeholder="Please input your user id"
              required
              onInput={(e) => setUserid(e.target.value)}
              className="ion-padding"
            ></IonInput>
            <IonInput
              type="password"
              label="Password"
              labelPlacement="start"
              placeholder="Please input your password"
              className="ion-margin-top ion-padding"
              required
              onInput={(e) => onPasswordChange(e)}
            ></IonInput>
            <IonButton expand="block" className="ion-margin-top" type="submit">
              Login
            </IonButton>
            <IonButton onClick={() => navigate("/register")} fill="clear">
              sign up
            </IonButton>
          </form>
        </IonContent>
      </IonPage>
    </div>
  );
};

export default Login;
