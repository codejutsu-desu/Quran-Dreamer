import PropTypes from "prop-types";

function CircleAboutMentor({ circle }) {
  const { owner_about_me, owner_name } = circle;
  return (
    <div className="p-5">
      <div className="flex w-auto text-base font-bold sm:text-lg md:text-xl lg:text-2xl ">
        <div className="mr-3">About your Mentor:</div>
        <div className="text-theme">{owner_name}</div>
      </div>
      <div className="mt-7">{owner_about_me}</div>
    </div>
  );
}

CircleAboutMentor.propTypes = {
  circle: PropTypes.object.isRequired,
};

export default CircleAboutMentor;
