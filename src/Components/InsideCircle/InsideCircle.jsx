import NavbarMentor from "../NavbarGeneral";
// import StudentNote from "../StudentNote";
import TeachersNote from "./TeachersNote";
import StudentsSidebar from "../SidebarGeneral";
import styles from "./InsideCircle.module.css";
import LiveClasses from "./LiveClasses";
import CircleMembers from "./CircleMembers";

import { useState } from "react";
import StudentNote from "../StudentNote";
import { useNavigate } from "react-router-dom";
function InsideCircle() {
  const [component, setComponent] = useState("");
  const navigate = useNavigate();

  const componentMembers = function () {
    setComponent("Members");
  };
  const componentDashboard = function () {
    navigate("/studentDashboard");
  };
  const componentStudentsNote = function () {
    setComponent("StudentsNote");
  };
  const componentTeachersNote = function () {
    setComponent("TeachersNote");
  };

  return (
    <div className={styles.insideCircleContainer}>
      <StudentsSidebar
        className={styles.sideBar}
        componentMembers={componentMembers}
        componentDashboard={componentDashboard}
        componentStudentsNote={componentStudentsNote}
        componentTeachersNote={componentTeachersNote}
        members="Members"
        notesByTeachers="Notes by Teacher"
      />
      <div className={styles.rightBar}>
        <NavbarMentor />
        <div className={styles.circleTitleNavbar}>
          <div className={styles.circleTitle}>
            <h3>Nahw Basic</h3>
            <h6>Member 6</h6>
          </div>
          <div className={styles.navBack}>
            <button
              className={styles.backButtonStyle}
              onClick={() => navigate(-1)}
            >
              Back
            </button>
          </div>
        </div>

        {component === "" && <LiveClasses />}
        {component === "Members" && <CircleMembers />}

        {component === "StudentsNote" && <StudentNote />}
        {component === "TeachersNote" && <TeachersNote />}
      </div>
    </div>
  );
}

export default InsideCircle;
