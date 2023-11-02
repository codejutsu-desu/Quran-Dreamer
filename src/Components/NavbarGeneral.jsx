import PropTypes from "prop-types";
import styles from "./NavbarGeneral.module.css";
import { MdOutlinePersonOutline } from "react-icons/md";

function NavbarGeneral({ user, userType }) {
  return (
    <div className={styles.topNavbar}>
      <div className={styles.icon}>
        <img src="/HomeIcon.svg" alt="Icon" />
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
