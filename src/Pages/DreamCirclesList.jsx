import { useState, useEffect } from "react";
import DreamCircleCards from "../Components/DreamCircleCards";
import DreamCirclesCardHeader from "../Components/DreamCirclesCardHeader";
import NavbarGeneral from "../Components/NavbarGeneral";
import SidebarGeneral from "../Components/SidebarGeneral";
import styles from "./DreamCirclesList.module.css";

function DreamCirclesList() {
  const [user, setUser] = useState("");

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  return (
    <div className={styles.dreamCirclesContainer}>
      <SidebarGeneral />
      <div className={styles.mainContainer}>
        <NavbarGeneral user={user} userType="Student" />
        <DreamCirclesCardHeader />
        <DreamCircleCards />
      </div>
    </div>
  );
}

export default DreamCirclesList;
