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
    <div className="p-5">
      <div className="text-base font-bold text-theme sm:text-lg md:text-xl lg:text-2xl">
        {categoryName}
      </div>

      <div className="mt-5">{about_circle}</div>
    </div>
  );
}

CircleAboutCircle.propTypes = {
  circle: PropTypes.object.isRequired,
};
export default CircleAboutCircle;
