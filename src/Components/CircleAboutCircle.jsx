import styles from "./CircleAboutCircle.module.css";
import PropTypes from "prop-types";
function CircleAboutCircle({ circle }) {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.aboutTitle}>About this Circle</div>

      <div className={styles.aboutDetails}>{circle.about_circle}</div>
    </div>
  );
}

CircleAboutCircle.propTypes = {
  circle: PropTypes.object.isRequired,
};
export default CircleAboutCircle;
