import styles from "./EventInfo.module.css";
function EventInfo() {
  return (
    <div className={styles.eventInfo}>
      <div className={styles.eventInfoTop}>
        <div className={styles.eventInfoTopRight}>Event 1</div>
        <div className={styles.eventInfoTopLeft}>Reserve Your Spot</div>
      </div>
      <div className={styles.eventInfoBottom}>
        <p>Date</p>
        <p>Time</p>
        <p>Location</p>
      </div>
    </div>
  );
}

export default EventInfo;
