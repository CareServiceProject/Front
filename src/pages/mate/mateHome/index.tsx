import React, { useEffect, useState } from "react";
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonInput,
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
            height: "280px",
            maxHeight: "40%",
            backgroundColor: "#FFFAF0",
            margin: "auto",
            textDecoration: "none",
            color: "black",
          }}
        >
          <Link to="/mate/home">
            <img
              src={bodyImg}
              alt="Logo"
              style={{
                flexDirection: "column",
                cursor: "pointer",
                width: "350px",
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
            textAlign: "center",
            margin: "auto",
            backgroundColor: "#ffffff",
            maxWidth: "80%",
            width: "55%",
            maxHeight: "30%",
            height: "227px",
            cursor: "pointer",
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
            style={{
              flexDirection: "column",
              alignItems: "center",
              display: "table-cell",
              verticalAlign: "middle",
              textDecoration: "none",
              color: "black",
            }}
          >
            <h1
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "auto",
                textDecoration: "none",
                color: "black",
              }}
            >
              <div style={{ textAlign: "center" }}>신규 요청</div>
            </h1>

            <h1>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "auto",
                  textDecoration: "none",
                  color: "gray",
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
