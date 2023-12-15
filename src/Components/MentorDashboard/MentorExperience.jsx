import Bottombar from "../Bottombar";
import Topbar from "../Topbar";

function MentorExperience() {
  return (
    <div className="flex min-h-screen flex-col justify-between">
      <Topbar />
      <div className="mx-2 rounded-lg border-2 border-solid border-theme">
        <div className="text-center text-lg font-bold lg:text-xl xl:text-2xl">
          Sign up as Mentor
        </div>
        <div className="p-5">
          <div className="mt-2 text-center text-lg font-semibold">
            Whats your teaching experience?
          </div>
          <div className="mx-2 mt-2 rounded-lg bg-theme p-2 font-semibold text-white ">
            More than 1 year
          </div>
          <div className="mx-2 mt-2 rounded-lg bg-theme p-2 font-semibold text-white">
            More than 6 months but less than a year
          </div>
          <div className="mx-2 mt-2 rounded-lg bg-theme p-2 font-semibold text-white">
            Less than 6 months
          </div>
        </div>
      </div>
      <Bottombar />
    </div>
  );
}

export default MentorExperience;
