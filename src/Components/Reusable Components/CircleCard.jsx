import styles from "./CircleCard.module.css";
function CircleCard() {
  return (
    <div className="relative flex  max-w-2xl flex-col space-x-2 rounded-xl border-2 border-solid border-theme bg-transparent bg-clip-border p-4 pl-2 pr-2 text-black shadow-none">
      <div className={styles.title}>
        <div className={styles.sectionLogo}>NB</div>
        <div className={styles.titleName}>
          <div className={styles.sectionTitle}>Nahw Basic</div>
          <div className={styles.sectionLead}>Sister Hana</div>
        </div>
      </div>
      <div className={styles.description}>
        The study covers all the basics of Nahw
      </div>

      <div className={styles.progresBar}>
        <div className={styles.membersandpercentage}>
          <div className={styles.members}>6 Members</div>
          <div className={styles.percentage}>15%</div>
        </div>
        <div className={styles.progressContainer}>
          <div className={styles.progress} style={{ width: "15%" }}></div>
        </div>
      </div>

      <div className={styles.cardBottom}>
        <button className="rounded border border-theme bg-transparent px-4 py-2 font-semibold text-black hover:border-transparent hover:bg-theme hover:text-white">
          Know More
        </button>
        <div className={styles.daysLeft}>26 Members</div>
      </div>
    </div>
  );
}

export default CircleCard;
