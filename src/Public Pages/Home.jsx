import { useNavigate } from "react-router-dom";
import AppLayout from "../Pages/AppLayout";
import PeoplesComment from "../PublicPagesComponents/PeoplesComment";
import CircleCard from "../Components/Reusable Components/CircleCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchStudyCircles } from "../actions";
import { useEffect } from "react";

function Home() {
  const dispatch = useDispatch();
  const circleData = useSelector((state) => state.studyCircles);
  console.log(circleData);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(fetchStudyCircles(token));
    }
  }, [dispatch]);

  const navigate = useNavigate();
  const handleJoinClickMentor = () => {
    navigate("./join/1");
  };
  const handleJoinClickStudent = () => {
    navigate("./join/2");
  };

  return (
    <AppLayout>
      <div
        className="m-4 h-[300px] bg-cover bg-center bg-no-repeat sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px]"
        style={{ backgroundImage: 'url("/homeBackground1.jpg")' }}
      >
        <div className=" pt-2 text-center text-2xl font-bold text-white sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
          Welcome Quran Dreamers! <br />
          <span className="text-xl font-normal text-white sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
            Where Your Journey Towards Understanding The Quran Begins!
          </span>
        </div>
      </div>
      <div
        className="h-[300px] bg-cover bg-center bg-no-repeat sm:h-[400px] lg:h-[500px] xl:h-[600px]"
        style={{ backgroundImage: 'url("/homeBackground2.jpg")' }}
      >
        <div className=" inset-0  flex h-full flex-col items-center backdrop-blur backdrop-filter">
          <div className=" pt-2 text-center text-xl font-semibold text-white md:text-3xl xl:text-5xl">
            Want to be a Mentor ?{" "}
          </div>

          <div className="mt-4 px-4 text-lg font-normal text-white md:text-2xl xl:text-4xl">
            The Prophet said, &quot;The best among you (Muslims) are those who
            learn the Qur&apos;an and teach it.&quot; We believe that teaching
            helps to bring our learning to a deeper level. If you also think
            like this and would like to lead a class circle, please join as a-{" "}
          </div>
          <button
            onClick={handleJoinClickMentor}
            className="mt-4 rounded border border-theme bg-transparent px-4 py-2 text-xl font-semibold text-white hover:border-transparent hover:bg-theme hover:text-white"
          >
            Mentor
          </button>
        </div>
      </div>
      <div className="mb-4 ml-auto mr-auto mt-4 flex w-auto flex-col items-stretch space-y-2  rounded-lg border-2 border-solid border-theme pb-2">
        <div className="text-center font-sans text-3xl font-semibold text-black">
          Explore our circle
        </div>
        <div className="flex  justify-center">
          {circleData.map((circle, index) => (
            <CircleCard key={index} circleData={circle} />
          ))}
        </div>

        <button
          onClick={handleJoinClickStudent}
          className="ml-auto mr-auto mt-2 w-20 rounded border border-theme bg-transparent px-4 py-2 font-semibold text-black hover:border-transparent hover:bg-theme hover:text-white"
        >
          Join!
        </button>
      </div>

      <div className=" mt-4 text-center font-sans text-2xl font-semibold text-black lg:text-4xl">
        What People Say About QuranDreamers
      </div>
      <div className="mt-4 flex flex-col items-center sm:flex-row sm:justify-around">
        <PeoplesComment
          name={"Sr Noorjahan"}
          comment={
            "Im really excited to be part of Quran Dreamers Team.  This platform is a bridge between QUR'AN and YOU! Let's study together, commit ourselves and leave an imprint for future generations.  Come join us and let's start this new thrilling adventure together!"
          }
        />
        <PeoplesComment
          name={"Sister Lakshmi"}
          comment={
            "Thank you for providing the Dreamers with this website. As a mentor, I am thrilled to have a place where I can contribute, sharing the knowledge we've learned in a more directed and systematic way, while at the same time hone my teaching skill. With various options of study levels, times, and languages, I really recommend this website for the Dreamers to continue their Quranic Arabic journey."
          }
        />
      </div>

      <div className="pt-4 text-center text-2xl font-bold text-black">
        Need Help?
      </div>

      <div className="mt-2 flex justify-center space-x-2">
        <a href="/contact">
          <img src="/Mail Icon (homepage).svg" alt="Email" />
        </a>
        <a href="/contact">
          <img src="/Q.A (homepage icon).svg" alt="Email" />
        </a>
      </div>
    </AppLayout>
  );
}

export default Home;
