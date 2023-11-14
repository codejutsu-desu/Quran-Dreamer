import { NavLink } from "react-router-dom";
import AppLayout from "../Pages/AppLayout";
import styles from "./Home.module.css";
import PeoplesComment from "../PublicPagesComponents/PeoplesComment";
import CircleCard from "../Components/Reusable Components/CircleCard";

function Home() {
  return (
    <AppLayout>
      <div className={styles.homeBackground1}>
        <p>
          Welcome Quran Dreamers! <br />
          <span className={styles.journey}>
            Where Your Journey Towards Understanding The Quran Begins!
          </span>
        </p>
      </div>
      <div className={styles.homeBackground2}>
        <img src="/homeBackground2.jpg" alt="" />
        <div className={styles.container}>
          <div className={styles.beDreamer}>Want to be a Mentor ? </div>

          <div className={styles.dreamerText}>
            The Prophet said, &quot;The best among you (Muslims) are those who
            learn the Qur&apos;an and teach it.&quot; We believe that teaching
            helps to bring our learning to a deeper level. If you also think
            like this and would like to lead a class circle, please join as a{" "}
            <NavLink to="/login">
              <button>mentor.</button>
            </NavLink>
          </div>
        </div>
      </div>
      <div className=" item-center flex flex-col items-center justify-between rounded-lg border-2 border-solid border-theme pb-2 ">
        <div className="text-center font-sans text-3xl font-semibold text-black">
          Explore our circle
        </div>
        <div className="flex justify-between">
          <CircleCard />
          <CircleCard />
          <CircleCard />
        </div>
        <button className=" w-20  rounded  border border-theme bg-transparent px-4 py-2 font-semibold text-black hover:border-transparent hover:bg-theme hover:text-white">
          Join!
        </button>
      </div>
      <div className="text-center font-sans text-2xl font-semibold text-black">
        What People Say About QuranDreamers
      </div>
      <div className={styles.peopleComments}>
        <PeoplesComment />
        <PeoplesComment />
      </div>
      <div className={styles.needHelp}>
        <div className={styles.needHelpText}>Need Help?</div>
        <div className={styles.helpIcons}>
          <div className={styles.qaIcon}>
            <div className={styles.circleOfIcon}>
              <a href="mailto:contact.qurandreamers@gmail.com">
                <img src="/Mail Icon (homepage).svg" alt="Email" />
              </a>
            </div>
          </div>
          <div className={styles.mailIcon}>
            <div className={styles.circleOfIcon}>
              <a href="mailto:contact.qurandreamers@gmail.com">
                <img src="/Q.A (homepage icon).svg" alt="Email" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}

export default Home;
