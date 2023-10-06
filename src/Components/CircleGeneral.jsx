import styles from "./CircleGeneral.module.css";
function CircleGeneral() {
  return (
    <div className={styles.circleGeneralContainer}>
      <div className={styles.generalInfo}>
        <h2>General Information</h2>
        <div className={styles.generalInfoText}>
          <div>Class Duration</div>
          <div>Lorem Ipsum color de smet</div>
        </div>
        <div className={styles.generalInfoText}>
          <div>Class days</div>
          <div>Lorem Ipsum color de smet</div>
        </div>
        <div className={styles.generalInfoText}>
          <div>Class timing</div>
          <div>Lorem Ipsum color de smet</div>
        </div>
        <div className={styles.generalInfoText}>
          <div>About</div>
          <div>Lorem Ipsum color de smet</div>
        </div>
      </div>
      <div className={styles.prerequisite}>
        <h2>Prerequisite</h2>
        <ul className={styles.prerequisiteUl}>
          <li>Prerequisite 1</li>
          <li>Prerequisite 2</li>
          <li>Prerequisite 3</li>
          <li>Prerequisite 4</li>
          <li>Prerequisite 5</li>
        </ul>
      </div>
    </div>
  );
}

export default CircleGeneral;
