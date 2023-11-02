import { useEffect, useState } from "react";
import CircleCurriculum from "./CircleCurriculum";
import CircleGeneral from "./CircleGeneral";
import CircleAboutMentor from "./CircleAboutMentor";
import CircleAboutCircle from "./CircleAboutCircle";
import styles from "./CircleInfo.module.css";
import NavbarMentor from "./NavbarGeneral";
import StudentsSidebar from "./SidebarGeneral";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function CircleInfo() {
  const { circleId } = useParams();
  console.log(circleId);
  const navigate = useNavigate();
  const [circleData, setCircleData] = useState([]);
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      const headers = {
        Authorization: `Bearer ${token}`,
      };

      axios
        .get(
          `http://13.126.8.147/api/quran_dreamers/study_circle/${circleId}`,
          {
            headers,
          }
        )
        .then((response) => {
          setCircleData(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, [circleId]);

  const circle = circleData[circleId];

  const [component, setComponent] = useState("");

  const circleGeneral = () => {
    setComponent("general");
  };
  const circleCurriculum = () => {
    setComponent("curriculum");
  };
  const circleAboutMentor = () => {
    setComponent("aboutMentor");
  };
  const circleAboutCircle = () => {
    setComponent("aboutCircle");
  };

  const handleJoinCircle = () => {
    // Make a GET request to join the circle
    const token = localStorage.getItem("token");
    if (token) {
      const headers = {
        Authorization: `Bearer ${token}`,
      };

      axios
        .get(
          `http://13.126.8.147/api/quran_dreamers/join_study_circle/study_circle/${circleId}`,
          {
            headers,
          }
        )
        .then(() => {
          navigate(`/insidecircle/${circleId}`);
        })
        .catch((error) => {
          console.error("Error joining the circle:", error);
        });
    }
  };

  return (
    <div className={styles.circleInfoContainer}>
      <StudentsSidebar />
      <div className={styles.navMentor}>
        <NavbarMentor />
        <div className={styles.circleInfo}>
          <div className={styles.infoHeader}>
            <div className={styles.infoHeaderLeft}>
              <button onClick={circleGeneral}>General</button>
              <button onClick={circleCurriculum}>Curriculum</button>
              <button onClick={circleAboutMentor}>About Mentor</button>
              <button onClick={circleAboutCircle}>About Circle</button>
            </div>
            <div className={styles.infoHeaderRight}>
              <button onClick={handleJoinCircle}>+Join Circle</button>
            </div>
          </div>
          {component === "" && <CircleGeneral />}
          {component === "general" && <CircleGeneral />}
          {component === "curriculum" && <CircleCurriculum />}
          {component === "aboutMentor" && <CircleAboutMentor />}
          {component === "aboutCircle" && <CircleAboutCircle circle={circle} />}
        </div>
      </div>
    </div>
  );
}

export default CircleInfo;
