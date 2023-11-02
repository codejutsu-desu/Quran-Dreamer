import { useState } from "react";
import styles from "./StudentDashboardNav.module.css";
import PropTypes from "prop-types";

function StudentDashboardNav({ newComponent }) {
  const [activeButton, setActiveButton] = useState("My Circles");

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
    newComponent(buttonName);
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
        className={activeButton === "+ Join a Circle" ? styles.active : ""}
        onClick={() => handleButtonClick("+ Join a Circle")}
      >
        + Join a Circle
      </button>
    </div>
  );
}

StudentDashboardNav.propTypes = {
  newComponent: PropTypes.func.isRequired,
};

export default StudentDashboardNav;
