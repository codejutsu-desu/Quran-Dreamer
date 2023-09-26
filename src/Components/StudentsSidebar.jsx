import styles from "./StudentsSidebar.module.css";
function StudentsSidebar() {
  return (
    <div className={styles.sideBarContainer}>
      <img src="logo.png" alt="" />
      <h2>Members</h2>
      <h2>Dashboard</h2>
      <h2>Students Note</h2>
      <h2>Notes by Teacher</h2>
    </div>
  );
}

export default StudentsSidebar;
