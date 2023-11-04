import styles from "./CircleClass.module.css";
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

function CircleClass({ circle }) {
  const { class_link, category } = circle;
  const categoryName = categoryNames[category];

  return (
    <div className={styles.mainLink}>
      <span>{categoryName}</span>- <a href={class_link}>{class_link}</a>
    </div>
  );
}

CircleClass.propTypes = {
  circle: PropTypes.object.isRequired,
};
export default CircleClass;
