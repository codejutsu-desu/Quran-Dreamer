import Bottombar from "../Bottombar";
import Topbar from "../Topbar";

function MentorPending() {
  return (
    <div className="flex min-h-screen flex-col justify-between">
      <Topbar />
      <div className="my-2 text-center text-lg font-semibold md:text-xl lg:text-2xl xl:text-3xl">
        <span className="font-bold text-theme">Thank You</span> for
        Registration!
      </div>
      <div className="mx-2 mb-2 ml-auto mr-auto w-3/4 rounded-lg border-2 border-solid border-theme">
        <div className="p-5">
          <div className="mt-2  text-base font-semibold md:text-lg lg:text-xl xl:text-2xl">
            Now one of our team member will contact you SOON for a video
            demonstration
          </div>
          <div className=" mt-2 rounded-lg  text-base font-semibold text-black md:text-lg lg:text-xl xl:text-2xl ">
            Why DEMO? If you ever wonder how you do with teaching, which skills
            you should maintain, which skills you should improve, or any other
            (related) questions, through the DEMO our Teaching Support Team will
            help you assess your teaching technique. We have well-known,
            experienced fellow students that are ready to help from all around
            the globe.
          </div>
          <div className="mx-2 mt-2 rounded-lg p-2 text-center text-base font-semibold text-black md:text-lg lg:text-xl xl:text-2xl">
            Stay tuned
          </div>
        </div>
      </div>
      <Bottombar />
    </div>
  );
}

export default MentorPending;
