<<<<<<< HEAD:src/Components/NavbarGeneral.jsx
import PropTypes from "prop-types";
import styles from "./NavbarGeneral.module.css";
=======
import { NavLink } from "react-router-dom";
import styles from "./NavbarMentor.module.css";
>>>>>>> 136ee6dbc52a2968f7acada541b69c188141a489:src/Components/NavbarMentor.jsx
import { MdOutlinePersonOutline } from "react-icons/md";

function NavbarGeneral({ user, userType }) {
  return (
    <div className={styles.topNavbar}>
      <div className={styles.icon}>
        <NavLink to="/">
          <img src="/HomeIcon.svg" alt="Icon" />
        </NavLink>
      </div>

      <div className={styles.userInfo}>
        <MdOutlinePersonOutline className={styles.userIcon} />

        <div className={styles.userNameandPosition}>
          <div className={styles.userPosition}>{user}</div>
          <div className={styles.userName}>{userType}</div>
        </div>
      </div>
    </div>
  );
}

NavbarGeneral.propTypes = {
  user: PropTypes.string.isRequired,
  userType: PropTypes.string.isRequired,
};

export default NavbarGeneral;
