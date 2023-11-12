import { NavLink } from "react-router-dom";
import AppLayout from "./AppLayout";
import styles from "./Home.module.css";
import { FaUserAlt } from "react-icons/fa";

function Home() {
  const handleContactUsClick = () => {
    window.location.href = "mailto:contact.qurandreamers@gmail.com";
  };

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
        <div className={styles.commentBox}>
          <div className={styles.circle}>
            <FaUserAlt className={styles.userIcon} />
          </div>
          <p className={styles.comment}>
            I am thrilled to be part of this innovative Quranic Arabic learning
            platform that brings together mentors, teachers, and students from
            all around the world. What sets this platform apart is its
            inclusivity. It welcomes individuals with varying levels of Arabic
            language knowledge, making the Quran accessible to all. I am
            confident that this website will evolve into a vibrant and
            supportive Quranic Arabic learning community, nurturing a deeper
            understanding of the Quran for people of all backgrounds.
          </p>
          <span>Sister Lakshmi</span>
        </div>
        <div className={styles.commentBox}>
          <div className={styles.circle}>
            <FaUserAlt className={styles.userIcon} />
          </div>
          <p className={styles.comment}>
            I am delighted to be a part of this groundbreaking Quranic Arabic
            learning website, which unites mentors, teachers, and students from
            across the globe. What truly distinguishes this website is its
            inclusive approach, catering to individuals of all Arabic language
            proficiency levels, making the Quran accessible to everyone. I
            wholeheartedly recommend it to those looking to enhance their
            Quranic Arabic skills and deepen their faith.
          </p>
          <span>Sister Noorjahan</span>
        </div>
        <div className={styles.commentBox}>
          <div className={styles.circle}>
            <FaUserAlt className={styles.userIcon} />
          </div>
          <p className={styles.comment}>
            Thank you for providing the Dreamers with this website. As a mentor,
            I am thrilled to have a place where I can contribute sharing the
            knowledge we have learned in a more directed and sistematic way,
            while at the same time cone my teaching skill. With various options
            of study levels, times and languages, I really recommend this
            website for the Dreamers to continue their Quranic Arabic journey.
          </p>

          <span>Sister Hana Cho</span>
        </div>
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
