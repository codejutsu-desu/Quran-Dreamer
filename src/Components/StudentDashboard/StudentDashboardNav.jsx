import { useState } from "react";
import styles from "./StudentDashboardNav.module.css";
import { useNavigate } from "react-router-dom";

function StudentDashboardNav() {
  const [activeButton, setActiveButton] = useState("My Circles");
  const navigate = useNavigate();

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);

    if (buttonName === "My Circles") {
      navigate("/studentDashboard/joinedCircles");
    } else if (buttonName === "My Classes") {
      navigate("/studentDashboard/myClasses");
    }
  };

  return (
    <div className={styles.container}>
      <img src="/greenHomeIcon.svg" alt="" />
      <button
        className={activeButton === "My Circles" ? styles.active : ""}
        onClick={() => handleButtonClick("My Circles")}
      >
        My Circles
      </button>
      <button
        className={activeButton === "My Classes" ? styles.active : ""}
        onClick={() => handleButtonClick("My Classes")}
      >
        My Classes
      </button>
      <button onClick={() => navigate("/appLayoutStudent")}>
        + Join a Circle
      </button>
    </div>
  );
}

export default StudentDashboardNav;
