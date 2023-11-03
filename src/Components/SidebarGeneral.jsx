import { NavLink } from "react-router-dom";
import styles from "./SidebarGeneral.module.css";

function SidebarGeneral() {
  return (
    <div className={styles.sideBarContainer}>
      <NavLink to="/">
        <img src="/logo.png" alt="" />
      </NavLink>
      <NavLink to="/studentDashboard">
        <button>Dashboard</button>
      </NavLink>

      <button>Students Note</button>
    </div>
  );
}

export default SidebarGeneral;
