import {
  IonAvatar,
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
import React, { useEffect, useState } from "react";
import Logo from "../../../components/Logo";
import { useNavigate } from "react-router-dom";
import { editUserInfo, getUserInfo } from "../../../api/user";
import DefaultAvatar from "../../../assets/default_avatar.jpg";

const UserProfile = () => {
  const router = useNavigate();

  const [avatar, setAvatar] = useState(null);
  const [userName, setUserName] = useState("");
  const [nickName, setNickName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState(undefined);
  const [pswDisabled, setPswDisabled] = useState(true);
  const [phone, setPhone] = useState("");
  const [profilePicture, setProfilePicture] = useState(undefined);

  const [data, setData] = useState({
    cid: null,
    name: null,
    id: null,
    email: null,
    phoneNumber: null,
  });

  useEffect(() => {
    getUserInfo().then((res) => {
      console.log(res);
      setData(res);
    });
  }, []);

  const profileSetting = (e) => {
    e.preventDefault();
    if (isPasswordValid === false) return;
    const editedData = data;
    delete editedData.name;
    // delete editedData.cid;
    // delete editedData.id;
    const formData = new FormData();
    formData.append("RequestUpdateDto", JSON.stringify(data));
    if (avatar) {
      formData.append("userProfileImage", avatar);
    }
    editUserInfo(formData);

    // router("/user/home");
  };

  const sendCode = () => {
    // TODO: 인증번호 보내기
  };

  const validate = () => {
    setIsPasswordValid(undefined);

    if (confirmPassword === "") return;

    password === confirmPassword
      ? setIsPasswordValid(true)
      : setIsPasswordValid(false);
  };
  useEffect(() => {
    validate();
  }, [password, confirmPassword]);

  const onChangePic = (evt) => {
    const tgt = evt.target,
      files = tgt.files;

    setAvatar(files);

    const reader = new FileReader();

    reader.onload = function () {
      document.getElementById("previewImg").src = reader.result;
    };

    reader.readAsDataURL(files[0]);
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
      <IonContent className="ion-padding signUp">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "10px",
            justifyContent: "space-between",
            marginBottom: "26px",
          }}
        >
          <div>
            <IonAvatar
              style={{ width: "100px", height: "100px", marginBottom: "16px" }}
            >
              <img src={DefaultAvatar} id="previewImg"></img>
            </IonAvatar>

            <label
              style={{
                border: "1px solid var(--ion-color-primary)",
                borderRadius: "10px",
                padding: "10px",
                color: "var(--ion-color-primary)",
              }}
            >
              <input
                id="avatar"
                type="file"
                accept="image/png, image/jpeg"
                style={{ display: "none" }}
                onChange={onChangePic}
              />
              프로필 사진 변경
            </label>
          </div>
          <div>
            <IonInput
              label="아이디"
              className="ion-margin-top ion-padding"
              required
              disabled
              value={data.id}
            ></IonInput>
            <IonInput
              label="이름"
              className="ion-margin-top ion-padding"
              required
              disabled
              value={data.name}
            ></IonInput>
          </div>
        </div>

        <IonInput
          label="이메일"
          className="ion-margin-top ion-padding"
          required
          onIonInput={(e) =>
            setData((prev) => ({ ...prev, email: e.target.value }))
          }
          value={data.email}
        ></IonInput>

        <div style={{ display: "flex" }}>
          <IonInput
            label="비밀번호"
            className="ion-margin-top ion-padding"
            required
            disabled={pswDisabled}
            onIonInput={(e) => setPassword(e.target.value)}
          ></IonInput>
          <IonButton
            fill="outline"
            className="ion-margin-start ion-margin-top"
            type="button"
            onClick={() => setPswDisabled(false)}
          >
            비밀번호 수정
          </IonButton>
        </div>

        <IonInput
          className="ion-margin-top ion-padding"
          label="비밀번호 확인"
          required
          disabled={pswDisabled}
          onIonInput={(event) => setConfirmPassword(event.target.value)}
        ></IonInput>
        {isPasswordValid === false && (
          <IonText color="danger" className="ion-margin-start">
            일치하지 않습니다.
          </IonText>
        )}

        <IonInput
          label="휴대폰번호"
          className="ion-margin-top ion-padding ion-margin-bottom"
          required
          onIonInput={(e) =>
            setData((prev) => ({ ...prev, phoneNumber: e.target.value }))
          }
          value={data.phoneNumber}
        ></IonInput>

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
