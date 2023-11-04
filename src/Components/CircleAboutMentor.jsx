import PropTypes from "prop-types";
import styles from "./CircleAboutMentor.module.css";

function CircleAboutMentor({ circle }) {
  const { owner_about_me, owner_name } = circle;
  return (
    <div className={styles.mainContainer}>
      <div className={styles.mentorInfo}>
        <div className={styles.mentorAbout}>About your Mentor:</div>
        <div className={styles.mentorName}>{owner_name}</div>
      </div>
      <div className={styles.mentorDetails}>{owner_about_me}</div>
    </div>
  );
}

CircleAboutMentor.propTypes = {
  circle: PropTypes.func.isRequired,
};

export default CircleAboutMentor;
