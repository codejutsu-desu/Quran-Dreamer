import styles from "./StudentsSidebar.module.css";

function StudentsSidebar() {
  return (
    <div className={styles.sideBarContainer}>
      <img src="/logo.png" alt="" />
      <button>Members</button>
      <button>Dashboard</button>
      <button>Students Note</button>
      <button>Notes by Teacher</button>
    </div>
  );
}

export default StudentsSidebar;
