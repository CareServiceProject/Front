import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonInput,
  IonPage,
  IonSelect,
  IonSelectOption,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { useState } from "react";
import Logo from "../../components/Logo";
import { useLocation, useNavigate } from "react-router-dom";
import { userSignUp, mateSignUp } from "../../api/authApi";
import { Toast } from "antd-mobile";

const SignUpForm = () => {
  const router = useNavigate();
  const location = useLocation();

  const signUpRole = location.state.role;

  const [userName, setUserName] = useState("");
  const [gender, setGender] = useState(null);
  const [ID, setID] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState(undefined);
  const [regNum, setRegNum] = useState();
  const [phone, setPhone] = useState("");

  const doCreateAccount = (e) => {
    e.preventDefault();
    if (isPasswordValid === false) return;

    if (gender === null) {
      Toast.show({
        content: "젠더를 선택해 주세요.",
      });
      return;
    }
    const i_d = signUpRole === "user" ? "user_id" : "mate_id";
    const formData = {
      [i_d]: ID,
      gender,
      name: userName,
      email,
      password,
      phone_number: phone,
      roles: signUpRole === "user" ? 3 : 2,
      registration_num: regNum,
    };

    // TODO:계정 생성
    signUpRole === "user"
      ? userSignUp(formData).then((res) => {
          if (res.code === 200) {
            Toast.show({
              content: res.message,
              maskClickable: false,
              afterClose: () => {
                router("/");
              },
            });
          }
        })
      : mateSignUp(formData).then((res) => {
          if (res.code === 200) {
            Toast.show({
              content: res.message,
              maskClickable: false,
              afterClose: () => {
                router("/");
              },
            });
          }
        });
  };

  const sendCode = () => {
    // TODO:인증번호 보내기
  };

  const validate = (ev) => {
    const value = ev.target .value;

    setIsPasswordValid(undefined);

    if (value === "") return;

    password === value ? setIsPasswordValid(true) : setIsPasswordValid(false);
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start" onClick={() => router(-1)}>
            <IonBackButton defaultHref="/"></IonBackButton>
          </IonButtons>
          <IonTitle>{signUpRole}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding signUp">
        <Logo></Logo>
        <form onSubmit={doCreateAccount}>
          <div style={{ display: "flex" }}>
            <IonInput
              label="아이디"
              labelPlacement="start"
              className="ion-padding"
              required
              onIonInput={(e) => setID(e.target.value)}
            ></IonInput>
            <IonSelect
              interface="popover"
              label="Gender"
              labelPlacement="start"
              className="ion-margin-start"
              onIonChange={(e) => setGender(e.detail.value)}
              style={{ background: "white", padding: "0 12px 0 12px" }}
            >
              <IonSelectOption value={1}>여</IonSelectOption>
              <IonSelectOption value={2}>남</IonSelectOption>
            </IonSelect>
          </div>
          <IonInput
            label="이름"
            labelPlacement="start"
            required
            onIonInput={(e) => setUserName(e.target.value)}
            className="ion-padding ion-margin-top"
          ></IonInput>
          <IonInput
            label="이메일"
            labelPlacement="start"
            className="ion-margin-top ion-padding"
            required
            onIonInput={(e) => setEmail(e.target.value)}
          ></IonInput>
          <IonInput
            type="password"
            label="비밀번호"
            labelPlacement="start"
            className="ion-margin-top ion-padding"
            required
            onIonInput={(e) => setPassword(e.target.value)}
          ></IonInput>
          <IonInput
            type="password"
            className="ion-margin-top ion-padding"
            label="비밀번호확인"
            labelPlacement="start"
            required
            onIonInput={(event) => validate(event)}
          ></IonInput>
          {isPasswordValid === false && (
            <div slot="label">
              <IonText color="danger" className="ion-margin-start">
                일치하지 않습니다.
              </IonText>
            </div>
          )}

          <IonInput
            label="휴대폰번호"
            labelPlacement="start"
            className="ion-margin-top ion-padding"
            required
            onIonInput={(e) => setPhone(e.target.value)}
          ></IonInput>
          <IonInput
            label="주민등록번호"
            labelPlacement="start"
            className="ion-margin-top ion-padding"
            required
            onIonInput={(e) => setRegNum(e.target.value)}
          ></IonInput>
          {/* <div style={{ display: "flex" }}>
            <IonInput
              label="인증번호"
              labelPlacement="start"
              
              className="ion-margin-top"
              required
            ></IonInput>
            <IonButton
              onClick={sendCode}
              className="ion-margin-top ion-margin-start"
            >
              인증번호 보내기
            </IonButton>
          </div> */}
          <IonButton expand="block" className="ion-margin-top" type="submit">
            create account now!
          </IonButton>
        </form>
      </IonContent>
    </IonPage>
  );
};

export default SignUpForm;
