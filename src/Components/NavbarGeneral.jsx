import styles from "./NavbarGeneral.module.css";
import { NavLink } from "react-router-dom";
import { MdOutlinePersonOutline } from "react-icons/md";
import { useEffect, useState } from "react";

function NavbarGeneral() {
  const [user, setUser] = useState("");
  const [userType, setUserType] = useState("");

  useEffect(() => {
    // Fetch user and userType from local storage
    const storedUser = localStorage.getItem("user");
    const storedUserType = localStorage.getItem("user_type");
    if (storedUser) {
      setUser(storedUser);
      // Set userType based on the storedUserType value
      if (storedUserType === "1") {
        setUserType("Mentor");
      } else if (storedUserType === "2") {
        setUserType("Student");
      } else if (storedUserType === "0") {
        setUserType("Admin");
      }
    }
  }, []);

  return (
    <div className={styles.topNavbar}>
      <div className={styles.icon}>
        <NavLink to="/">
          <img src="/HomeIcon.svg" alt="Icon" />
        </NavLink>
      </div>
      <h2>Dashboard</h2>
      <div className={styles.userInfo}>
        <MdOutlinePersonOutline className={styles.userIcon} />

        <div className={styles.userNameandPosition}>
          <div className={styles.userPosition}>{userType}</div>
          <div className={styles.userName}>{user}</div>
        </div>
      </div>
    </div>
  );
}

export default NavbarGeneral;
