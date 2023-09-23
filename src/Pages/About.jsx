import AppLayout from "./AppLayout";
import styles from "./About.module.css";
import { NavLink } from "react-router-dom";

function About() {
  return (
    <AppLayout>
      <div>
        <p className={styles.understandConquer}>
          Understand the Quran, Conquer the World! <br />
        </p>
        <p className={styles.visionTitle}>
          <span>Our Vision</span> is to
        </p>
        <p className={styles.visionText}>
          Lorem ipsum dolor sit amet consec tetur. diam vivamus tortor enim arcu
          cras eget pellentesque. Ullamcorper eros tincidunt enim
        </p>
      </div>

      <div className={styles.ytThumbnail}>
        <img className={styles.ytimg} src="/youtube.jpg" alt="" />
        <img className={styles.iconImg} src="/youtubeicon.svg" alt="" />
        <div className={styles.watchOnYt}>Watch on Youtube</div>
      </div>

      <div className={styles.availability}>
        <p className={styles.onlineAvailability}>
          <span>Our Online Availability</span>
          <br /> Lorem ipsum dolor sit amet consectetur. diam vivamus tortor
          enim arcu cras eget pellentesque. Ullamcorper eros tincidunt enim
        </p>

        <button>Watch Online</button>
        <NavLink to="/notes">
          <button>Student Notes</button>
        </NavLink>
        <div className={styles.communityInfo}>
          <h1>Our Community</h1>
          <h2>
            Lorem ipsum dolor sit amet consectetur. Accumsan aliquet ornare
            gravida velit erat convallis. Eget enim eu feugiat dis integer est
            libero nisi mattis. Ac adipiscing interdum aenean eget tincidunt ut
            accumsan amet. Arcu aliquet amet cras commodo tincidunt velit
            adipiscing nulla pellentesque. Purus gravida sit viverra libero
            tristique aliquet nulla eu justo. Id diam risus pharetra tempor
            congue tellus. Tellus id vitae mattis sit purus et eu id ut.
          </h2>
        </div>
      </div>
    </AppLayout>
  );
}

export default About;
