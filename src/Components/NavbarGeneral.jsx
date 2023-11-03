import styles from "./NavbarGeneral.module.css";
import { NavLink } from "react-router-dom";
import { MdOutlinePersonOutline } from "react-icons/md";
import { useEffect, useState } from "react";

function NavbarGeneral() {
  const [user, setUser] = useState("");

  useEffect(() => {
    // Fetch user and userType from local storage
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);
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
          <div className={styles.userName}>Student</div>
        </div>
      </div>
    </div>
  );
}

export default NavbarGeneral;
