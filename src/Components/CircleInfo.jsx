import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { fetchCircleData } from "../actions";
// import { FETCH_CIRCLE_DATA } from "../actions"; // Import the action type
import NavbarGeneral from "./NavbarGeneral";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CircleCurriculum from "./CircleCurriculum";
import CircleGeneral from "./CircleGeneral";
import CircleAboutMentor from "./CircleAboutMentor";
import CircleAboutCircle from "./CircleAboutCircle";
import styles from "./CircleInfo.module.css";
import StudentsSidebar from "./SidebarGeneral";

const categoryNames = {
  0: "Nahw Basics",
  1: "Sarf Basic",
  2: "Intermediate Nahw",
  3: "Advance Nahw",
  4: "Advanced Sarf",
  5: "Basic Reader",
  6: "Intermediate Reader",
  7: "Advanced Reader",
};

function CircleInfo() {
  const navigate = useNavigate();
  const { circleId } = useParams();
  const dispatch = useDispatch(); // Get the dispatch function

  // Dispatch the action to fetch circle data
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(fetchCircleData(token, circleId));
    }
  }, [dispatch, circleId]);

  const circleData = useSelector((state) => state.circleData);
  const categoryName = categoryNames[circleData.category];

  const [component, setComponent] = useState("general"); // Set the default component to 'general'

  const handleTabClick = (tabName) => {
    setComponent(tabName);
  };

  const handleJoinCircle = () => {
    const token = localStorage.getItem("token");
    if (token) {
      const headers = {
        Authorization: `Bearer ${token}`,
      };

      toast.success("Joining the circle... ", {
        position: "top-center",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: false, // Make it non-draggable
      });

      // Perform the axios request
      axios
        .get(
          `http://13.126.8.147/api/quran_dreamers/join_study_circle/study_circle/${circleId}`,
          {
            headers,
          }
        )
        .then(() => {
          // Navigate after 3 seconds
          setTimeout(() => {
            toast.dismiss(); // Dismiss the loading notification
            navigate(`/insidecircle/${circleId}`);
          }, 3000);
        })
        .catch((error) => {
          console.error("Error joining the circle:", error);
          toast.dismiss(); // Dismiss the loading notification
          // Show an error notification
          toast.error("Error joining the circle.", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        });
    }
  };

  return (
    <div className={styles.circleInfoContainer}>
      <StudentsSidebar />
      <div className={styles.navMentor}>
        <NavbarGeneral />
        <div className={styles.circleInfoHeader}>
          Dream Circle/ {categoryName}
          <button
            className={styles.backButtonStyle}
            onClick={() => navigate(-1)}
          >
            Back
          </button>
        </div>

        <div className={styles.circleInfo}>
          <div className={styles.infoHeader}>
            <div className={styles.infoHeaderLeft}>
              <button
                onClick={() => handleTabClick("general")}
                className={component === "general" ? styles.active : ""}
              >
                General
              </button>
              <button
                onClick={() => handleTabClick("curriculum")}
                className={component === "curriculum" ? styles.active : ""}
              >
                Curriculum
              </button>
              <button
                onClick={() => handleTabClick("aboutMentor")}
                className={component === "aboutMentor" ? styles.active : ""}
              >
                About Mentor
              </button>
              <button
                onClick={() => handleTabClick("aboutCircle")}
                className={component === "aboutCircle" ? styles.active : ""}
              >
                About Circle
              </button>
            </div>
            <div className={styles.infoHeaderRight}>
              <button onClick={handleJoinCircle}>+Join Circle</button>
            </div>
          </div>
          {component === "general" && <CircleGeneral circle={circleData} />}
          {component === "curriculum" && (
            <CircleCurriculum circle={circleData} />
          )}
          {component === "aboutMentor" && (
            <CircleAboutMentor circle={circleData} />
          )}
          {component === "aboutCircle" && (
            <CircleAboutCircle circle={circleData} />
          )}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default CircleInfo;
