import CircleClass from "./CircleClass";
import styles from "./MyClasses.module.css";
import PropTypes from "prop-types";

function MyClasses({ circleData }) {
  return (
    <div className={styles.mainContainer}>
      <p>You Class links are listed here</p>
      {circleData.map((circle) => (
        <CircleClass circle={circle} key={circle.id} />
      ))}
    </div>
  );
}

MyClasses.propTypes = {
  circleData: PropTypes.array.isRequired,
};

export default MyClasses;
