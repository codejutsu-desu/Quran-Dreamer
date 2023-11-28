import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { fetchCircleData, fetchJoinedCircle } from "../actions";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CircleCurriculum from "./CircleCurriculum";
import CircleGeneral from "./CircleGeneral";
import CircleAboutMentor from "./CircleAboutMentor";
import CircleAboutCircle from "./CircleAboutCircle";

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

function CircleInfo() {
  const navigate = useNavigate();
  const { circleId } = useParams();
  const dispatch = useDispatch(); // Get the dispatch function

  // Dispatch the action to fetch circle data
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(fetchCircleData(token, circleId));
      dispatch(fetchJoinedCircle(token, circleId));
    }
  }, [dispatch, circleId]);

  const joinedCircles = useSelector((state) => state.joinedCircles);
  const circleData = useSelector((state) => state.circleData);

  const isCircleJoined = joinedCircles.some(
    (joinedCircle) => joinedCircle.id === Number(circleId),
  );

  const categoryName = categoryNames[circleData.category];

  const [component, setComponent] = useState("general"); // Set the default component to 'general'

  const handleTabClick = (tabName) => {
    setComponent(tabName);
  };

  const handleJoinCircle = () => {
    const token = localStorage.getItem("token");
    if (token) {
      const headers = {
        Authorization: `Bearer ${token}`,
      };

      toast.success("Joining the circle... ", {
        position: "top-center",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: false, // Make it non-draggable
      });

      // Perform the axios request
      axios
        .get(
          `http://13.126.8.147/api/quran_dreamers/join_study_circle/study_circle/${circleId}`,
          {
            headers,
          },
        )
        .then(() => {
          // Navigate after 3 seconds
          setTimeout(() => {
            toast.dismiss();
            navigate(`/appLayoutStudent/insideCircle/${circleId}`);
          }, 3000);
        })
        .catch((error) => {
          console.error("Error joining the circle:", error);
          toast.dismiss(); // Dismiss the loading notification
          // Show an error notification
          toast.error("Error joining the circle.", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        });
    }
  };

  return (
    <>
      <div className="flex items-center justify-around px-5 py-2">
        <div className="text-sm font-extrabold text-black sm:text-base md:text-xl lg:text-2xl ">
          Dream Circle/ {categoryName}
        </div>
        <button
          className="rounded border border-theme bg-transparent px-4 py-2 font-semibold text-black hover:border-transparent hover:bg-theme hover:text-white"
          onClick={() => navigate(-1)}
        >
          Back
        </button>
      </div>

      <div className="ml-auto mr-auto mt-5 h-auto w-auto rounded-2xl border-2 border-solid border-theme py-3 lg:w-[90%] xl:w-[80%]">
        <div className="flex justify-between border-b-2 border-solid border-theme px-3">
          <div className="flex space-x-3 pb-1 font-sans text-xs font-bold sm:text-sm md:text-base lg:text-lg xl:text-xl">
            <button
              onClick={() => handleTabClick("general")}
              className={
                component === "general"
                  ? ` border-b-2 border-solid border-theme`
                  : ""
              }
            >
              General
            </button>
            <button
              onClick={() => handleTabClick("curriculum")}
              className={
                component === "curriculum"
                  ? ` border-b-2 border-solid border-theme`
                  : ""
              }
            >
              Curriculum
            </button>
            <button
              onClick={() => handleTabClick("aboutMentor")}
              className={
                component === "aboutMentor"
                  ? ` border-b-2 border-solid border-theme`
                  : ""
              }
            >
              About Mentor
            </button>
            <button
              onClick={() => handleTabClick("aboutCircle")}
              className={
                component === "aboutCircle"
                  ? ` border-b-2 border-solid border-theme`
                  : ""
              }
            >
              About Circle
            </button>
          </div>
          <div className="pb-1">
            <div className="">
              {isCircleJoined ? (
                <button
                  className="rounded border border-theme bg-transparent px-4 py-2 font-semibold text-black hover:border-transparent hover:bg-theme hover:text-white sm:text-sm md:text-base lg:text-lg xl:text-xl"
                  onClick={() =>
                    navigate(`/appLayoutStudent/insideCircle/${circleId}`)
                  }
                >
                  Joined- Know More
                </button>
              ) : (
                <button
                  onClick={handleJoinCircle}
                  className="rounded border border-theme bg-transparent px-4 py-2  text-xs font-semibold text-black hover:border-transparent hover:bg-theme hover:text-white sm:text-sm md:text-base lg:text-lg xl:text-xl"
                >
                  Join{" "}
                </button>
              )}
            </div>
          </div>
        </div>
        {component === "general" && <CircleGeneral circle={circleData} />}
        {component === "curriculum" && <CircleCurriculum circle={circleData} />}
        {component === "aboutMentor" && (
          <CircleAboutMentor circle={circleData} />
        )}
        {component === "aboutCircle" && (
          <CircleAboutCircle circle={circleData} />
        )}
        <ToastContainer />
      </div>
    </>
  );
}

export default CircleInfo;
