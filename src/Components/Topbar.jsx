import { NavLink } from "react-router-dom";
import styles from "./Topbar.module.css";
import JoinUs from "../ui/Dropdown";
function Topbar() {
  return (
    <header className={styles.header}>
      <NavLink to="/" className={styles.home}>
        <img src="/logo.png" alt="" />
      </NavLink>

      <ul>
        <NavLink to="/about" className={styles.about}>
          <li>About us</li>
        </NavLink>

        <NavLink to="/events" className={styles.events}>
          <li>Events</li>
        </NavLink>

        <NavLink to="/login" className={styles.login}>
          <li>Login</li>
        </NavLink>

        <JoinUs />
      </ul>
    </header>
  );
}

export default Topbar;
