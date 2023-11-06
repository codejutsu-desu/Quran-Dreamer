import DreamCircleCard from "./DreamCircleCard";
import styles from "./DreamCircleCards.module.css";
import PropTypes from "prop-types";

function DreamCircleCards({ nonJoinedCircles }) {
  return (
    <div className={styles.cardContainer}>
      {nonJoinedCircles.map((circle) => (
        <DreamCircleCard key={circle.id} circle={circle} />
      ))}
    </div>
  );
}

DreamCircleCards.propTypes = {
  nonJoinedCircles: PropTypes.array.isRequired, // Validate setNonJoinedCircles as a function
};

export default DreamCircleCards;
