import styles from "./AdminMain.module.css";
function AdminMain() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.circle}></div>
      <div className={styles.change}>Change Profile Picture</div>
      <div className={styles.name}>
        <h2>Adminstrator</h2>
        <h3>Basit Minhaz</h3>
      </div>
    </div>
  );
}

export default AdminMain;
