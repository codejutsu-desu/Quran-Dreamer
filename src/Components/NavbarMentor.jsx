import { NavLink } from "react-router-dom";
import styles from "./NavbarMentor.module.css";
import { MdOutlinePersonOutline } from "react-icons/md";
function NavbarMentor() {
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
          <div className={styles.userPosition}>Adminstrator</div>
          <div className={styles.userName}>Basit Minhaz</div>
        </div>
      </div>
    </div>
  );
}

export default NavbarMentor;
