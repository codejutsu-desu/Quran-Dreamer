import Bottombar from "../Bottombar";
import Topbar from "../Topbar";
import { useNavigate } from "react-router-dom";

function MentorExperience() {
  const navigate = useNavigate();
  const handleExperienceClick = (experience) => {
    if (experience === "More than 1 year") {
      navigate("dashboardMentorLayout");
    } else if (experience === "More than 6 months but less than a year") {
      navigate("join/mentorExperience/videoDemo");
    } else if (experience === "Less than 6 months") {
      navigate("join/mentorExperience/mentorPending");
    }
  };

  return (
    <div className="flex min-h-screen flex-col justify-between">
      <Topbar />
      <div className="text-center text-xl font-semibold lg:text-2xl xl:text-3xl">
        Sign up as Mentor
      </div>
      <div className="mx-2 rounded-lg border-2 border-solid border-theme">
        <div className="p-5">
          <div className="mt-2 text-center text-lg font-semibold">
            Whats your teaching experience?
          </div>
          <div
            onClick={() => handleExperienceClick("More than 1 year")}
            className="mx-2 mt-2 rounded-lg bg-theme p-2 font-semibold text-white "
          >
            More than 1 year
          </div>
          <div
            onClick={() =>
              handleExperienceClick("More than 6 months but less than a year")
            }
            className="mx-2 mt-2 rounded-lg bg-theme p-2 font-semibold text-white"
          >
            More than 6 months but less than a year
          </div>
          <div
            onClick={() => handleExperienceClick("Less than 6 months")}
            className="mx-2 mt-2 rounded-lg bg-theme p-2 font-semibold text-white"
          >
            Less than 6 months
          </div>
        </div>
      </div>
      <Bottombar />
    </div>
  );
}

export default MentorExperience;
