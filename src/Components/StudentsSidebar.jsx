import styles from "./StudentsSidebar.module.css";
import { NavLink } from "react-router-dom";
function StudentsSidebar() {
  return (
    <div className={styles.sideBarContainer}>
      <NavLink to="/">
        <img src="/logo.png" alt="" />
      </NavLink>

      <button>Members</button>
      <button>Dashboard</button>
      <button>Students Note</button>
      <button>Notes by Teacher</button>
    </div>
  );
}

export default StudentsSidebar;
