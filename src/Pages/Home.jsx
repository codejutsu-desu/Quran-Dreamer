import AppLayout from "./AppLayout";
import styles from "./Home.module.css";
import { FaUserAlt } from "react-icons/fa";

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
          <div className={styles.beDreamer}>Be a Dreamer With Us!</div>

          <div className={styles.dreamerText}>
            Lorem ipsum dolor sit amet consectetur. Lobortis in adipiscing massa
            morbi bibendum risus aliquet sit ut. Risus lacus morbi turpis cursus
            tellus ut non eu. Velit ligula in leo sit ut tempor sit et. Augue
            mauris dignissim nibh purus. Dignissim sit eget justo volutpat. Ut
            habitant penatibus orci ac ipsum ultricies. Aliquet urna mattis
            suspendisse at. Quis aenean phasellus nibh fames hendrerit
            facilisis. Nibh dui morbi urna nec pretium sed turpis donec quis.
            Odio ut diam cras ultricies urna. Nisi eget arcu sit erat quam
            bibendum feugiat est in.
          </div>
        </div>
      </div>

      <div className={styles.explore}>Explore our circle</div>
      <div className={styles.circles}>
        <div className={styles.circle1}>
          <div className={styles.title}>Reader Basic</div>
          <div className={styles.mentor}>Sr Maryam</div>
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
            <div className={styles.mentor}>Sr Nida</div>
            <div className={styles.titleText}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, nisi
              veritatis tempore, hic modi, corporis dolores consectetur id
              deserunt et facilis
            </div>
          </div>
          <div className={styles.circle3}>
            <div className={styles.title}>Sarf Advance</div>
            <div className={styles.mentor}>Sr Hana</div>
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
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae
            harum quibusdam ipsa reiciendis porro.
          </p>
          <span>Haider Ali Khan</span>
        </div>
        <div className={styles.commentBox}>
          <div className={styles.circle}>
            <FaUserAlt className={styles.userIcon} />
          </div>
          <p className={styles.comment}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae
            harum quibusdam ipsa reiciendis porro.
          </p>
          <span>Haider Ali Khan</span>
        </div>
        <div className={styles.commentBox}>
          <div className={styles.circle}>
            <FaUserAlt className={styles.userIcon} />
          </div>
          <p className={styles.comment}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae
            harum quibusdam ipsa reiciendis porro.
          </p>

          <span>Haider Ali Khan</span>
        </div>
      </div>
      <div className={styles.needHelp}>
        <div className={styles.needHelpText}>Need Help?</div>
        <div className={styles.helpIcons}>
          <div className={styles.qaIcon}>
            <div className={styles.circleOfIcon}>
              <img src="/Mail Icon (homepage).svg" alt="" />
            </div>
          </div>
          <div className={styles.mailIcon}>
            <div className={styles.circleOfIcon}>
              <img src="/Q.A (homepage icon).svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}

export default Home;
