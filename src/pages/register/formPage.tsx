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
  useIonRouter,
} from "@ionic/react";
import React, { useState } from "react";
import Logo from "../../components/Logo";

const SignUpForm: React.FC = () => {
  const router = useIonRouter();
  const signUpRole = router.routeInfo.routeOptions?.type;

  const [userName, setUserName] = useState("");
  const [gender, setGender] = useState(0);
  const [nickName, setNickName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState(undefined);
  const [phone, setPhone] = useState("");

  const doCreateAccount = (e) => {
    e.preventDefault();
    if (isPasswordValid === false) return;
    const formData = {
      userName,
      gender,
      nickName,
      email,
      password,
      phone,
    };
    console.log("eeee", formData, signUpRole);
    // TODO:계정 생성

    router.push("/user", "root", "replace");
  };

  const sendCode = () => {
    // TODO:인증번호 보내기
  };

  const validate = (ev: Event) => {
    const value = (ev.target as HTMLInputElement).value;

    console.log("vvv", value);
    setIsPasswordValid(undefined);

    if (value === "") return;

    password === value ? setIsPasswordValid(true) : setIsPasswordValid(false);
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton></IonBackButton>
          </IonButtons>
          <IonTitle>Sign Up</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <Logo></Logo>
        <form onSubmit={doCreateAccount}>
          <div style={{ display: "flex" }}>
            <IonInput
              label="이름"
              labelPlacement="floating"
              fill="outline"
              required
              onIonChange={(e) => setUserName(e.detail.value)}
            ></IonInput>

            <IonSelect
              interface="popover"
              label="Gender"
              fill="outline"
              labelPlacement="floating"
              className="ion-margin-start"
              onIonChange={(e) => setGender(e.detail.value)}
            >
              <IonSelectOption value={1}>여</IonSelectOption>
              <IonSelectOption value={2}>남</IonSelectOption>
            </IonSelect>
          </div>
          <IonInput
            label="아이디(닉네임)"
            labelPlacement="floating"
            fill="outline"
            className="ion-margin-top"
            required
            onIonChange={(e) => setNickName(e.detail.value)}
          ></IonInput>
          <IonInput
            label="이메일"
            labelPlacement="floating"
            fill="outline"
            className="ion-margin-top"
            required
            onIonChange={(e) => setEmail(e.detail.value)}
          ></IonInput>
          <IonInput
            label="비밀번호"
            labelPlacement="floating"
            fill="outline"
            className="ion-margin-top"
            required
            onIonChange={(e) => setPassword(e.detail.value)}
          ></IonInput>
          <IonInput
            className="ion-margin-top"
            label="비밀번호확인"
            labelPlacement="floating"
            fill="outline"
            required
            disabled={password ? false : true}
            onIonInput={(event) => validate(event)}
          ></IonInput>
          {isPasswordValid === false && (
            <div slot="label">
              <IonText color="danger">not same</IonText>
            </div>
          )}

          <IonInput
            label="휴대폰번호"
            labelPlacement="floating"
            fill="outline"
            className="ion-margin-top"
            required
            onIonChange={(e) => setPhone(e.detail.value)}
          ></IonInput>
          {/* <div style={{ display: "flex" }}>
            <IonInput
              label="인증번호"
              labelPlacement="floating"
              fill="outline"
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
