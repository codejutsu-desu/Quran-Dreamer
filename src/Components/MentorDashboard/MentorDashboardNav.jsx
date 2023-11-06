import styles from "./MentorDashboardNav.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function MentorDashboardNav() {
  const [activeButton, setActiveButton] = useState("My Circles");
  const navigate = useNavigate();

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);

    if (buttonName === "My Circles") {
      navigate("/dashboardMentorLayout/myCircles");
    } else if (buttonName === "My Classes") {
      navigate("/dashboardMentorLayout/myOwnCircles");
    } else if (buttonName === "Links")
      navigate("/dashboardMentorLayout/myLinks");
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
      <button
        className={activeButton === "Links" ? styles.active : ""}
        onClick={() => handleButtonClick("Links")}
      >
        Links
      </button>
      <button onClick={() => navigate("/appLayoutMentor")}>
        Create a new circle
      </button>
    </div>
  );
}

export default MentorDashboardNav;
