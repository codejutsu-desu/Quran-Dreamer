import { NavLink } from "react-router-dom";
import AppLayout from "../Pages/AppLayout";
import PeoplesComment from "../PublicPagesComponents/PeoplesComment";
import CircleCard from "../Components/Reusable Components/CircleCard";

function Home() {
  return (
    <AppLayout>
      <div
        className="m-4 h-[300px] bg-cover bg-center bg-no-repeat sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px]"
        style={{ backgroundImage: 'url("public/homeBackground1.jpg")' }}
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
        style={{ backgroundImage: 'url("public/homeBackground2.jpg")' }}
      >
        <div className=" inset-0  flex h-full flex-col items-center backdrop-blur backdrop-filter">
          <div className=" pt-2 text-center text-2xl font-semibold text-white md:text-3xl xl:text-5xl">
            Want to be a Mentor ?{" "}
          </div>

          <div className="mt-4 px-4 text-xl font-normal text-white md:text-2xl xl:text-4xl">
            The Prophet said, &quot;The best among you (Muslims) are those who
            learn the Qur&apos;an and teach it.&quot; We believe that teaching
            helps to bring our learning to a deeper level. If you also think
            like this and would like to lead a class circle, please join as a{" "}
          </div>
          <button className="mt-4 rounded border border-theme bg-transparent px-4 py-2 text-xl font-semibold text-white hover:border-transparent hover:bg-theme hover:text-white">
            Mentor
          </button>
        </div>
      </div>
      <div className="mb-4 ml-auto mr-auto mt-4 flex w-auto flex-col items-center  rounded-lg border-2 border-solid border-theme pb-2">
        <div className="text-center font-sans text-3xl font-semibold text-black">
          Explore our circle
        </div>
        <div className="item-stretch flex space-x-2">
          <CircleCard />
          <CircleCard />
          {/* <CircleCard className="hidden" /> */}
        </div>
        <button className="mt-2 w-20 rounded border border-theme bg-transparent px-4 py-2 font-semibold text-black hover:border-transparent hover:bg-theme hover:text-white">
          Join!
        </button>
      </div>

      <div className=" mt-4 text-center font-sans text-2xl font-semibold text-black lg:text-4xl">
        What People Say About QuranDreamers
      </div>
      <div className="mt-4 flex justify-around">
        <PeoplesComment />
        <PeoplesComment />
      </div>
      <div className="pt-4 text-center text-2xl font-bold text-black">
        Need Help?
      </div>

      <div className="mt-2 flex justify-center space-x-2">
        <a href="mailto:contact.qurandreamers@gmail.com">
          <img src="/Mail Icon (homepage).svg" alt="Email" />
        </a>
        <a href="mailto:contact.qurandreamers@gmail.com">
          <img src="/Q.A (homepage icon).svg" alt="Email" />
        </a>
      </div>
    </AppLayout>
  );
}

export default Home;
