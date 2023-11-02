import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
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

SidebarGeneral.propTypes = {
  members: PropTypes.string.isRequired,
  notesByTeachers: PropTypes.string.isRequired,
  component: PropTypes.string.isRequired,
  componentMembers: PropTypes.func.isRequired,
  componentDashboard: PropTypes.func.isRequired,
  componentStudentsNote: PropTypes.func.isRequired,
  componentTeachersNote: PropTypes.func.isRequired,
};

export default SidebarGeneral;
