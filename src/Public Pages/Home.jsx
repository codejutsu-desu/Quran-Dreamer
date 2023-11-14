import { NavLink } from "react-router-dom";
import AppLayout from "../Pages/AppLayout";
import styles from "./Home.module.css";
import PeoplesComment from "../PublicPagesComponents/PeoplesComment";

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

      <div className={styles.explore}>Explore our circle</div>
      <div className={styles.circles}>
        <div className={styles.circle1}>
          <div className={styles.title}>Reader Basic</div>
          <div className={styles.mentor}>COMING SOON</div>
          <div className={styles.titleText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            aliquam possimus ut non dolor sapiente laboriosam error aspernatur
            assumenda placeat veniam nisi cum, saepe distinctio provident natus
            aut fuga ipsam.
          </div>
        </div>
        <div className={styles.bottomCircles}>
          <div className={styles.circle2}>
            <div className={styles.title}>Nahw Basic</div>
            <div className={styles.mentor}>COMING SOON</div>
            <div className={styles.titleText}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, nisi
              veritatis tempore, hic modi, corporis dolores consectetur id
              deserunt et facilis
            </div>
          </div>
          <div className={styles.circle3}>
            <div className={styles.title}>Sarf Advance</div>
            <div className={styles.mentor}>COMING SOON</div>
            <div className={styles.titleText}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              veniam repellendus dolorem nulla minima debitis deleniti voluptas
              quam a iure incidunt.
            </div>
          </div>
        </div>

        <div className={styles.viewMore}>
          <span>View More</span>
        </div>
      </div>
      <div className={styles.whatPeopleSay}>
        What People Say About QuranDreamers
      </div>

      <div className={styles.peopleComments}>
        <PeoplesComment name={"Sister Lakshmi"} />
        <PeoplesComment name={""} />
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
