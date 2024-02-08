import DreamCircleCard from "./DreamCircleCard";

import PropTypes from "prop-types";

function DreamCircleCards({ filteredCircles }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
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
