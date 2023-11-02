import { useEffect, useState } from "react";
import styles from "./JoinedCircles.module.css";
import axios from "axios";
import JoinedCircle from "./JoinedCircle";
function JoinedCircles() {
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
        .get("http://13.126.8.147/api/quran_dreamers/study_circles_joined", {
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
        <JoinedCircle key={circle.id} circle={circle} />
      ))}
    </div>
  );
}

export default JoinedCircles;
