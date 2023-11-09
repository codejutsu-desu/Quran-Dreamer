import { NavLink } from "react-router-dom";
import styles from "./SidebarGeneral.module.css";

function SidebarGeneral() {
  // Check the user_type from local storage
  const user_type = localStorage.getItem("user_type");

  return (
    <div className={styles.sideBarContainer}>
      <NavLink to="/">
        <img src="/logo.png" alt="" />
      </NavLink>
      {user_type === "1" ? (
        <NavLink to="/dashboardMentorLayout">
          <button>Dashboard</button>
        </NavLink>
      ) : (
        <NavLink to="/studentDashboard">
          <button>Dashboard</button>
        </NavLink>
      )}
      <NavLink to="/notAvailable">
        <button>Students Note</button>
      </NavLink>
    </div>
  );
}

export default SidebarGeneral;
