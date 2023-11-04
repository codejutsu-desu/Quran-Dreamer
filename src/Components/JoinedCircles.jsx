import styles from "./JoinedCircles.module.css";
import PropTypes from "prop-types"; // Import PropTypes

import JoinedCircle from "./JoinedCircle";

function JoinedCircles({ circleData }) {
  return (
    <div className={styles.cardContainer}>
      {circleData.map((circle) => (
        <JoinedCircle key={circle.id} circle={circle} />
      ))}
    </div>
  );
}

JoinedCircles.propTypes = {
  circleData: PropTypes.array.isRequired, // Assuming circleData is an array
};

export default JoinedCircles;
