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
  const { class_link, category, owner_name } = circle;
  const categoryName = categoryNames[category];

  return (
    <div className="border-b border-black py-2 text-2xl">
      <h3 className="text-center">Class mentor- {owner_name}</h3>
      <div className="flex justify-center">
        <span className="font-bold">{categoryName}</span>-
        <a href={class_link}>{class_link}</a>
      </div>
    </div>
  );
}

CircleClass.propTypes = {
  circle: PropTypes.object.isRequired,
};
export default CircleClass;
