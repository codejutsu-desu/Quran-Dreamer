import styles from "./LiveClasses.module.css";
function LiveClasses() {
  return (
    <div className={styles.liveContainer}>
      <div className={styles.liveRecord}>
        <div className={styles.live}>
          <h3> Live Classes </h3>
          <p>
            *Note: Join live classes at sharp time given otherwise you can take
            them later as recorded lectures{" "}
          </p>
          <p> https//zoommeeting/join </p>
          <span>00: 00 hours </span>
          <span>Monday- dd/mm/yyyyy</span>
        </div>
        <div className={styles.record}>
          <h3>Recorded class</h3>
          <p>
            https//you.tube/recording <span> dd/mm/yyyy </span>
          </p>
          <p>
            https//you.tube/recording <span> dd/mm/yyyy </span>
          </p>
          <p>
            https//you.tube/recording <span> dd/mm/yyyy </span>
          </p>
          <p>
            https//you.tube/recording <span> dd/mm/yyyy </span>
          </p>
          <p>
            Recording not available <span> dd/mm/yyyy </span>
          </p>
        </div>
      </div>
      <div className={styles.discussionForum}>
        <h3>Discussion Forum </h3>
        <p>https//whatsapp-group/join.com</p>
      </div>
    </div>
  );
}

export default LiveClasses;
