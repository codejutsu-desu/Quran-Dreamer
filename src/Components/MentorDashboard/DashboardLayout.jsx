import NavbarGeneral from "../NavbarGeneral";
import { Outlet } from "react-router-dom";
import styles from "./DashboardLayout.module.css";
import MentorDashboardNav from "./MentorDashboardNav";
function DashboardLayout() {
  return (
    <div className={styles.mainDashboard}>
      <NavbarGeneral />
      <MentorDashboardNav />
      <Outlet />
    </div>
  );
}

export default DashboardLayout;
