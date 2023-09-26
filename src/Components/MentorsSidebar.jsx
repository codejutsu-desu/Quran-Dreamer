import styles from "./MentorsSidebar.module.css";
const LeftSidebar = () => {
  return (
    <div className={styles.sideBarContainer}>
      <img src="logo.png" alt="" />
      <h2>Dashboard</h2>
      <div className={styles.mentorWelcome}>
        <p className={styles.welcome}>
          Welcome to the family of Quran Dreamers!
        </p>
        <p className={styles.excited}>
          We are so excited that you are part of our journey to help others
          understand Quran in the best way possible.
        </p>
        <p className={styles.create}>
          Create a Dream Circlle and begin your wonderful Journey!
        </p>
      </div>
    </div>
  );
};

export default LeftSidebar;
