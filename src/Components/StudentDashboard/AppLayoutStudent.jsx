import { Outlet } from "react-router-dom";
import NavbarGeneral from "../NavbarGeneral";
import SidebarGeneral from "../SidebarGeneral";
import styles from "./AppLayoutStudent.module.css";
function AppLayoutStudent() {
  return (
    <div className={styles.dreamCirclesContainer}>
      <SidebarGeneral />
      <div className={styles.mainContainer}>
        <NavbarGeneral />
        <Outlet />
      </div>
    </div>
  );
}

export default AppLayoutStudent;
