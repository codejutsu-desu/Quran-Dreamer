import styles from "./CircleAboutCircle.module.css";
import PropTypes from "prop-types";

const categoryNames = {
  0: "Nahw Basics",
  1: "Sarf Basic",
  2: "Intermediate Nahw",
  3: "Advance Nahw",
  4: "Advanced Sarf",
  5: "Basic Reader",
  6: "Intermediate Reader",
  7: "Advanced Reader",
};

function CircleAboutCircle({ circle }) {
  const { about_circle, category } = circle;
  const categoryName = categoryNames[category];
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.aboutTitle}>{categoryName}</div>

      <div className={styles.aboutDetails}>{about_circle}</div>
    </div>
  );
}

CircleAboutCircle.propTypes = {
  circle: PropTypes.object.isRequired,
};
export default CircleAboutCircle;
