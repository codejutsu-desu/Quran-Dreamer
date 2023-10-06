import styles from "./CircleAboutMentor.module.css";
function CircleAboutMentor() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.mentorInfo}>
        <div className={styles.mentorAbout}>About your Mentor:</div>
        <div className={styles.mentorName}>Sister Hana</div>
      </div>
      <div className={styles.mentorDetails}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero
        consequuntur qui mollitia blanditiis nesciunt dolores voluptate odit
        inventore, architecto eaque eveniet voluptatibus aliquid, odio placeat
        enim voluptatum praesentium harum velit.
      </div>
    </div>
  );
}

export default CircleAboutMentor;
