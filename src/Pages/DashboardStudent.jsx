import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavbarMentor from "../Components/NavbarGeneral";
import MyCircle from "../Components/StudentDashboard/MyCircle";

import MyClass from "../Components/StudentDashboard/MyClass";
import styles from "./DashboardStudent.module.css";

function DashboardStudent() {
  const [component, setComponent] = useState("");
  const navigate = useNavigate();

  const mycircle = () => {
    setComponent("mycircle");
  };
  const myclasses = () => {
    setComponent("myclasses");
  };
  const joinCircle = () => {
    setComponent("joinCircle");
    navigate("/dreamcircles");
  };

  return (
    <div className={styles.dashboardContainer}>
      <NavbarMentor />
      <div className={styles.dashboardNav}>
        <div className={styles.icon}>
          <img src="/dashboardHome.svg" alt="Icon" />
        </div>
        <div className={styles.title}>
          <button onClick={mycircle}>My circles</button>
          <button onClick={myclasses}>My classes</button>
          <button onClick={joinCircle}>+ Join a class</button>
        </div>
      </div>
      {component === "mycircle" && <MyCircle />}
      {component === "myclasses" && <MyClass />}
    </div>
  );
}

export default DashboardStudent;
