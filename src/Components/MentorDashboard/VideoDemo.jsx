import { useNavigate } from "react-router-dom";
import Bottombar from "../Bottombar";
import Topbar from "../Topbar";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { signUpFailure } from "../../actions";

function VideoDemo() {
  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);
  const dispatch = useDispatch();
  const handleClick = async (e) => {
    try {
      const modifiedUserData = {
        ...userData,
        is_experienced: false,
      };

      if (e === "Yes") {
        console.log("Form Data:", userData);

        // Make the post request using form data
        const response = await axios.post(
          "https://fmr4zl8hr6.execute-api.ap-south-1.amazonaws.com/v1/signup/",
          userData,
        );
        console.log(response);
        navigate("/join/mentorExperience/mentorPending");
      } else if (e === "No") {
        const response = await axios.post(
          "https://fmr4zl8hr6.execute-api.ap-south-1.amazonaws.com/v1/signup/",
          modifiedUserData,
        );
        console.log(response);
        navigate("/login");
      }
    } catch (error) {
      console.error(error.response.data);
      dispatch(signUpFailure(error.response.data)); // Dispatch failure action
    }
  };

  return (
    <div className="flex min-h-screen flex-col justify-between">
      <Topbar />
      <div className="my-2 text-center text-lg font-semibold md:text-xl lg:text-2xl xl:text-3xl">
        Sign Up as Mentor
      </div>
      <div className="mx-2 mb-2 ml-auto mr-auto w-3/4 rounded-lg border-2 border-solid border-theme">
        <div className="p-5">
          <div className="mt-2 text-center text-base font-semibold md:text-lg lg:text-xl xl:text-2xl">
            We recommend you to give a demo to increase your credibility.{" "}
          </div>
          <div className="mx-2 mt-2 rounded-lg p-2 text-base font-semibold text-black md:text-lg lg:text-xl xl:text-2xl ">
            Why DEMO? If you ever wonder how you do with teaching, which skills
            you should maintain, which skills you should improve, or any other
            (related) questions, through the DEMO our Teaching Support Team will
            help you assess your teaching technique. We have well-known,
            experienced fellow students that are ready to help; Sr. Ilham from
            Kenya, Br. Basit from Pakistan,...
          </div>
          <div className="mx-2 mt-2 rounded-lg p-2 text-base font-semibold text-black md:text-lg lg:text-xl xl:text-2xl">
            Do You Want to give a video demonstration to Us?
          </div>
          <div className="flex justify-center space-x-3">
            <button
              onClick={() => handleClick("Yes")}
              className="rounded border border-theme bg-transparent px-4 py-2 font-semibold text-black hover:border-transparent hover:bg-theme hover:text-white"
            >
              Yes
            </button>
            <button
              onClick={() => handleClick("No")}
              className="rounded border border-theme bg-transparent px-4 py-2 font-semibold text-black hover:border-transparent hover:bg-theme hover:text-white"
            >
              No
            </button>
          </div>
        </div>
      </div>
      <Bottombar />
    </div>
  );
}

export default VideoDemo;
