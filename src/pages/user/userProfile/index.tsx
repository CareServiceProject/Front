import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonInput,
  IonLabel,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { useState } from "react";
import Logo from "../../../components/Logo";
import { useNavigate } from "react-router-dom";
import {
  Camera,
  CameraResultType,
  CameraSource,
  CameraPhoto,
} from "@capacitor/camera";

const UserProfile: React.FC = () => {
  const router = useNavigate();

  const [userName, setUserName] = useState("");
  const [nickName, setNickName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState(undefined);
  const [phone, setPhone] = useState("");
  const [profilePicture, setProfilePicture] = useState<string | undefined>(
    undefined
  );

  const profileSetting = (e: React.FormEvent) => {
    e.preventDefault();
    if (isPasswordValid === false) return;
    const formData = {
      userName,
      nickName,
      email,
      password,
      phone,
      profilePicture,
    };

    router("/user/home");
  };

  const sendCode = () => {
    // TODO: 인증번호 보내기
  };

  const validate = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const value = ev.target.value;

    setIsPasswordValid(undefined);

    if (value === "") return;

    password === value ? setIsPasswordValid(true) : setIsPasswordValid(false);
  };

  const takePicture = async () => {
    try {
      const cameraPhoto = await Camera.getPhoto({
        resultType: CameraResultType.Uri,
        source: CameraSource.Photos,
        quality: 50,
      });

      setProfilePicture(cameraPhoto.webPath);
    } catch (error) {
      console.error("Error taking picture", error);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start" onClick={() => router(-1)}>
            <IonBackButton defaultHref="/" />
          </IonButtons>
          <IonTitle>Profile Setting</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <Logo></Logo>
        <div>
          <IonLabel>이름 {userName}</IonLabel>
        </div>
        <div>
          <IonLabel>아이디 {nickName}</IonLabel>
        </div>

        <IonInput
          label="이메일"
          labelPlacement="floating"
          fill="outline"
          className="ion-margin-top"
          required
          onIonChange={(e) => setEmail(e.detail.value!)}
        ></IonInput>

        <IonInput
          label="비밀번호"
          labelPlacement="floating"
          fill="outline"
          className="ion-margin-top"
          required
          onIonChange={(e) => setPassword(e.detail.value!)}
        ></IonInput>

        <IonInput
          className="ion-margin-top"
          label="비밀번호 확인"
          labelPlacement="floating"
          fill="outline"
          required
          disabled={password ? false : true}
          onIonChange={(event) => validate(event)}
        ></IonInput>

        {isPasswordValid === false && (
          <div>
            <IonText color="danger">비밀번호가 일치하지 않습니다.</IonText>
          </div>
        )}

        <IonInput
          label="휴대폰번호"
          labelPlacement="floating"
          fill="outline"
          className="ion-margin-top"
          required
          onIonChange={(e) => setPhone(e.detail.value!)}
        ></IonInput>

        {profilePicture && (
          <img
            src={profilePicture}
            alt="Profile"
            style={{ width: "100%", height: "auto" }}
          />
        )}

        <IonLabel>프로필 사진</IonLabel>
        <IonButton
          fill="outline"
          className="ion-margin-top"
          type="button"
          onClick={takePicture}
        >
          첨부
        </IonButton>

        <IonButton
          expand="block"
          className="ion-margin-top"
          type="submit"
          onClick={profileSetting}
        >
          완료
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default UserProfile;
