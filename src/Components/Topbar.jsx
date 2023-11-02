import { NavLink } from "react-router-dom";
import styles from "./Topbar.module.css";
import JoinUs from "../ui/Dropdown";

function Topbar() {
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "http://localhost:5173/";
  };

  return (
    <header className={styles.header}>
      <NavLink to="/" className={styles.home}>
        <img src="/logo.png" alt="" />
      </NavLink>

      <ul className={styles.homeUl}>
        <NavLink to="/about" className={styles.about}>
          <li className={styles.aboutLi}>About us</li>
        </NavLink>

        {token ? (
          <>
            {/* <NavLink to="/events" className={styles.events}>
              <li className={styles.aboutLi}>Events</li>
            </NavLink> */}
            <NavLink to="/dreamCircles" className={styles.circles}>
              <li className={styles.aboutLi}>All Circles</li>
            </NavLink>
            <li className={styles.aboutLi} onClick={handleLogout}>
              Logout
            </li>
          </>
        ) : (
          <>
            <NavLink to="/login" className={styles.login}>
              <li className={styles.aboutLi}>Login</li>
            </NavLink>
            <JoinUs />
          </>
        )}
      </ul>
    </header>
  );
}

export default Topbar;
