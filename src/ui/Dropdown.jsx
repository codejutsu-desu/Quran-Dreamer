import { useState } from "react";
import { NavLink } from "react-router-dom";

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
        <ul className={styles.dropdownMenu}>
          <NavLink to="/join/2" onClick={closeDropdown}>
            <li>Student</li>
          </NavLink>
          <NavLink to="/join/1" onClick={closeDropdown}>
            <li>Mentor</li>
          </NavLink>
        </ul>
      )}
      {isOpen && <div className={styles.overlay} onClick={closeDropdown}></div>}
    </div>
  );
}

export default JoinUs;
