import { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Dropdown.module.css"; // Import your CSS styles here

function JoinUs() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <div className={styles.dropdown}>
      <button
        className={`${styles.dropdownToggle} ${isOpen ? styles.open : ""}`}
        onClick={toggleDropdown}
      >
        Join
      </button>
      {isOpen && (
        <NavLink to="/join" onClick={closeDropdown}>
          <ul className={styles.dropdownMenu}>
            <li>Student</li>
            <li>Mentor</li>
          </ul>
        </NavLink>
      )}
      {isOpen && <div className={styles.overlay} onClick={closeDropdown}></div>}
    </div>
  );
}

export default JoinUs;
