import styles from "./ClassTimeCard.module.css";

function ClassTimeCard() {
  return (
    <div className={styles.classTimeContainer}>
      <div className={styles.top}>
        <div className={styles.category}>Nahw Basic</div>
        <div className={styles.name}> Mentor: Sr Sana </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.link}> This is the link </div>
        <div className={styles.date}> This is the date</div>
      </div>
    </div>
  );
}

export default ClassTimeCard;
