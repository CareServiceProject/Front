import React, { useEffect, useState } from "react";
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { Link } from "react-router-dom";
import bodyImg from "../../../assets/logo-big-greenRed.png";
import { fetchWaitingCareList } from "../../../api/mateApi";
import ServiceCard from "../../../components/ServiceCard";
import "./style.css";

const MateHome: React.FC = () => {
  const [waitingCareList, setWaitingCareList] = useState([]);

  useEffect(() => {
    const fetchWaitingCare = async () => {
      try {
        const data = await fetchWaitingCareList();
        setWaitingCareList(data);
      } catch (error) {
        console.error("Error fetching waiting care list:", error);
      }
    };

    fetchWaitingCare();
  }, []);

  return (
    <IonPage id="main-menu">
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="end">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle></IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            // width: "313px",
            height: "280px",
            backgroundColor: "#FFFAF0",
            margin: "23px auto 20px",
            textDecoration: "none",
            color: "black",
            // border: "2px solid #ccc",
            // borderRadius: "10px",
            // boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
            // transition: "box-shadow 0.3s ease",
          }}
          // className="mateLogo-container"
          // onMouseEnter={(e) => {
          //   e.currentTarget.style.boxShadow = "0px 6px 12px rgba(0, 0, 0, 0.2)";
          // }}
          // onMouseLeave={(e) => {
          //   e.currentTarget.style.boxShadow = "0px 4px 8px rgba(0, 0, 0, 0.1)";
          // }}
        >
          <Link to="/mate/home">
            <img
              src={bodyImg}
              alt="Logo"
              style={{
                flexDirection: "column",
                cursor: "pointer",
                width: "250px",
                height: "100%",
                objectFit: "cover",
              }}
              className="mllogo-img"
            />
          </Link>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            margin: "0% auto 0",
            backgroundColor: "#ffffff",
            width: "500px",
            height: "227px",
            cursor: "pointer",
            // border: "2px solid #ccc",
            borderRadius: "10px",
            boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
            transition: "box-shadow 0.3s ease",
          }}
          className="request-container"
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = "0px 6px 12px rgba(0, 0, 0, 0.2)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = "0px 4px 8px rgba(0, 0, 0, 0.1)";
          }}
        >
          <Link
            to="/waitingList"
            style={{ textDecoration: "none", color: "black" }}
          >
            <h2
              style={{
                // fontFamily: "TmoneyRoundWind",
                color: "black",
              }}
            >
              <div style={{}} className="request-top">
                신규요청
              </div>
            </h2>
            <h1>
              <div
                style={{
                  textDecoration: "none",
                  color: "gray",
                  paddingLeft: "10px",
                }}
                className="request-count"
              >
                {waitingCareList.length} 건
              </div>
            </h1>
          </Link>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default MateHome;
