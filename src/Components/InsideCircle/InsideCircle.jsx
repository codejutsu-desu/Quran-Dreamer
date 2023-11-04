import { useDispatch, useSelector } from "react-redux";
import { fetchCircleData } from "../../actions";

import NavbarMentor from "../NavbarGeneral";
// import StudentNote from "../StudentNote";
import TeachersNote from "./TeachersNote";
import StudentsSidebar from "../SidebarGeneral";
import styles from "./InsideCircle.module.css";
import LiveClasses from "./LiveClasses";
import CircleMembers from "./CircleMembers";

import { useEffect, useState } from "react";
import StudentNote from "../StudentNote";
import { useNavigate, useParams } from "react-router-dom";

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

function InsideCircle() {
  const [component, setComponent] = useState("");
  const navigate = useNavigate();
  const { circleId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(fetchCircleData(token, circleId));
    }
  }, [dispatch, circleId]);

  const circleData = useSelector((state) => state.circleData);
  const categoryName = categoryNames[circleData.category];

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
          <div className={styles.circleInfoHeader}>
            Dream Circle/ {categoryName}
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

        {component === "" && <LiveClasses circle={circleData} />}
        {component === "Members" && <CircleMembers />}

        {component === "StudentsNote" && <StudentNote />}
        {component === "TeachersNote" && <TeachersNote />}
      </div>
    </div>
  );
}

export default InsideCircle;
