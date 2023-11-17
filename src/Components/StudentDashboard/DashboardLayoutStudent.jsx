import NavbarGeneral from "../NavbarGeneral";

import { Outlet } from "react-router-dom";
import styles from "./DashboardLayoutStudent.module.css";
import StudentDashboardNav from "./StudentDashboardNav";

function DashboardLayoutStudent() {
  return (
    <div className={styles.dashboardStudentMain}>
      <NavbarGeneral />
      <StudentDashboardNav />
      <Outlet />
    </div>
  );
}

export default DashboardLayoutStudent;
