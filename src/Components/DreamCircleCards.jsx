import DreamCircleCard from "./DreamCircleCard";
import styles from "./DreamCircleCards.module.css";

import PropTypes from "prop-types";

function DreamCircleCards({ filteredCircles }) {
  return (
    <div className={styles.cardContainer}>
      {filteredCircles.map((circle) => (
        <DreamCircleCard key={circle.id} circle={circle} />
      ))}
    </div>
  );
}

DreamCircleCards.propTypes = {
  filteredCircles: PropTypes.array.isRequired,
};

export default DreamCircleCards;
