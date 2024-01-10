import Bottombar from "../Bottombar";
import Topbar from "../Topbar";
import { useSelector } from "react-redux";
import axios from "axios";

import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MentorExperience() {
  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);

  const handleExperienceClick = async (experience) => {
    try {
      const modifiedUserData = {
        ...userData,
        is_experienced: false,
      };

      if (experience === "More than 1 year") {
        console.log("Form Data:", userData);

        const response = await axios.post(
          "https://fmr4zl8hr6.execute-api.ap-south-1.amazonaws.com/v1/signup/",
          userData,
        );

        if (response.data) {
          navigate("/login");
        }
      } else if (experience === "More than 6 months but less than a year") {
        navigate("/join/mentorExperience/videoDemo");
      } else if (experience === "Less than 6 months") {
        console.log("Form Data:", modifiedUserData);
        const response = await axios.post(
          "https://fmr4zl8hr6.execute-api.ap-south-1.amazonaws.com/v1/signup/",
          modifiedUserData,
        );
        console.log(response.data);

        navigate("/join/mentorExperience/mentorPending");
      }
    } catch (error) {
      console.error(error.response.data);
    }
  };

  return (
    <div className="flex min-h-screen flex-col justify-between">
      <ToastContainer />
      <Topbar />
      <div className="text-center text-xl font-semibold lg:text-2xl xl:text-3xl">
        Sign up as Mentor
      </div>
      <div className="mx-2 rounded-lg border-2 border-solid border-theme">
        <div className="p-5">
          <div className="mt-2 text-center text-lg font-semibold">
            Do you have any teaching experience?
          </div>
          <div
            onClick={() => handleExperienceClick("More than 1 year")}
            className="mx-2 mt-2 cursor-pointer rounded-lg bg-theme p-2 font-semibold text-white "
          >
            Yes, more than 1 year
          </div>
          <div
            onClick={() =>
              handleExperienceClick("More than 6 months but less than a year")
            }
            className="mx-2 mt-2 cursor-pointer rounded-lg bg-theme p-2 font-semibold text-white"
          >
            Yes. Less than 6 months
          </div>
          <div
            onClick={() => handleExperienceClick("Less than 6 months")}
            className="mx-2 mt-2 cursor-pointer rounded-lg bg-theme p-2 font-semibold text-white"
          >
            No. Zero experience
          </div>
        </div>
      </div>
      <Bottombar />
    </div>
  );
}

export default MentorExperience;
