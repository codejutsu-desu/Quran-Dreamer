import { useState, useEffect } from "react";
import axios from "axios";
import DreamCircleCard from "./DreamCircleCard";
import styles from "./DreamCircleCards.module.css";

function DreamCircleCards() {
  const [circleData, setCircleData] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token);
    if (token) {
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      console.log(circleData);
      axios
        .get("http://13.126.8.147/api/quran_dreamers/study_circles/", {
          headers,
        })
        .then((response) => {
          setCircleData(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, []);

  return (
    <div className={styles.cardContainer}>
      {circleData.map((circle) => (
        <DreamCircleCard key={circle.id} circle={circle} />
      ))}
    </div>
  );
}

export default DreamCircleCards;
