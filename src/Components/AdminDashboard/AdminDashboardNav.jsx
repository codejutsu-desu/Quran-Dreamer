import styles from "./AdminDashboardNav.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminDashboardNav() {
  const [activeButton, setActiveButton] = useState("My Circles");
  const navigate = useNavigate();

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);

    if (buttonName === "Main") {
      navigate("/adminDashboardLayout/main");
    } else if (buttonName === "Requests") {
      navigate("/adminDashboardLayout/requests");
    } else if (buttonName === "All Admins") {
      navigate("/adminDashboardLayout/adminAll");
    } else if (buttonName === "Groups") {
      navigate("/adminDashboardLayout/adminGroups");
    }
  };

  return (
    <div className={styles.container}>
      <img src="/greenHomeIcon.svg" alt="" />
      <button
        className={activeButton === "Main" ? styles.active : ""}
        onClick={() => handleButtonClick("Main")}
      >
        Main
      </button>
      <button
        className={activeButton === "Requests" ? styles.active : ""}
        onClick={() => handleButtonClick("Requests")}
      >
        Requests
      </button>
      <button
        className={activeButton === "All Admins" ? styles.active : ""}
        onClick={() => handleButtonClick("All Admins")}
      >
        All Admins
      </button>

      <button
        className={activeButton === "Groups" ? styles.active : ""}
        onClick={() => handleButtonClick("Groups")}
      >
        Groups
      </button>
    </div>
  );
}

export default AdminDashboardNav;
