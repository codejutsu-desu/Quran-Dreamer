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
    <div className="flex items-center justify-between bg-theme p-2 text-white">
      <div className="h-full">
        <NavLink to="/">
          <img src="/HomeIcon.svg" alt="Icon" />
        </NavLink>
      </div>
      <div className="text-2xl font-bold text-white">Dashboard</div>
      <div className={styles.userInfo}>
        <MdOutlinePersonOutline className="h-full w-12 font-sans" />

        <div className={styles.userNameandPosition}>
          <div className={styles.userPosition}>{userType}</div>
          <div className={styles.userName}>{user}</div>
        </div>
      </div>
    </div>
  );
}

export default NavbarGeneral;
