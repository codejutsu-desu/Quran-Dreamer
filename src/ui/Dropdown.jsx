import Dropdown from "react-bootstrap/Dropdown";
import styles from "./Dropdown.module.css";

function JoinUs() {
  return (
    <Dropdown>
      <Dropdown.Toggle
        className={`${styles.customColor} custom-dropdown-toggle`}
      >
        Join
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">As a Student</Dropdown.Item>
        <Dropdown.Item href="#/action-2">As a Mentor</Dropdown.Item>
        <Dropdown.Item href="#/action-3">As a Admin</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default JoinUs;
