import AppLayout from "./AppLayout";
import styles from "./About.module.css";

// import { NavLink } from "react-router-dom";

const customNavLinkStyle = {
  textDecoration: "none",
  color: "#12e000",
};

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

      {/* Embed the YouTube video here */}
      <div className={styles.ytThumbnail}>
        <div className={styles.embedContainer}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/Spm3QqF6_q8"
            title="YouTube video player"
            // eslint-disable-next-line react/no-unknown-property
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; fullscreen; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>

      <div className={styles.availability}>
        {/* <p className={styles.onlineAvailability}>
          <span>Our Online Availability</span>
          <br /> Lorem ipsum dolor sit amet consectetur. diam vivamus tortor
          enim arcu cras eget pellentesque. Ullamcorper eros tincidunt enim
        </p> */}

        {/* <button>Watch Online</button>
        <NavLink to="/notes">
          <button>Student Notes</button>
        </NavLink> */}
        <div className={styles.communityInfo}>
          <h1>Our Community</h1>
          <h2>
            <span dir="rtl">
              إِنَّا جَعَلْنَـٰهُ قُرْءَٰنًا عَرَبِيًّا لَّعَلَّكُمْ تَعْقِلُونَ
            </span>
            <span className={styles.englishTranslation}>
              We have caused it to be a discourse in the Arabic tongue, so that
              you might encompass it with your reason- Quran
            </span>
            <br />
            We are the students of Ustadh{" "}
            <a
              style={customNavLinkStyle}
              href="https://www.facebook.com/noumanbayyinah/"
            >
              Nouman Ali Khan{" "}
            </a>
            of the{" "}
            <a style={customNavLinkStyle} href="https://www.bayyinahtv.com/">
              Bayyinah Institute{" "}
            </a>
            who teaches Quranic Arabic in the{" "}
            <a style={customNavLinkStyle} href="https://dream.bayyinahtv.com/">
              Dream Program.{" "}
            </a>
            We have come together to create a platform for fellow students to
            benefit from a larger group of Dreamers. We have student teachers
            (we call Mentors) who lead classes, teachers aide and fellow
            students who help each other in the course of navigating the Dream
            Program. Please go to Bayyinah TV website for the official full
            course.
          </h2>
        </div>
      </div>
    </AppLayout>
  );
}

export default About;
