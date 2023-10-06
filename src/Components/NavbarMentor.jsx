import styles from "./NavbarMentor.module.css";
import { MdOutlinePersonOutline } from "react-icons/md";
function NavbarMentor() {
  return (
    <div className={styles.topNavbar}>
      <div className={styles.icon}>
        <img src="/HomeIcon.svg" alt="Icon" />
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
