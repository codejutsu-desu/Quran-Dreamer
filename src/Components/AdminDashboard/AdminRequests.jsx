import styles from "./AdminRequests.module.css";
function AdminRequests() {
  return (
    <div className={styles.requestContainer}>
      <div className={styles.circle}>1</div>
      <div className={styles.text}>File upload from Sister Hana</div>
      <button className={styles.viewButton}>View</button>
    </div>
  );
}

export default AdminRequests;
