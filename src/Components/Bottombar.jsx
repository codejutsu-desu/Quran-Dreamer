import styles from "./Bottombar.module.css";
function Bottombar() {
  return (
    <footer className={styles.footer}>
      <img className={styles.logo} src="/logo.png" alt="" />

      <div className={styles.connect}>
        <p>Reach us</p>
        <span className={styles.socialLogos}>
          <span className={styles.socialLogo}>
            <img src="/FacebookIcon.svg" alt="" />
          </span>
          <span className={styles.socialLogo}>
            <img src="/Instagram Icon.svg" alt="" />
          </span>
          <span className={styles.socialLogo}>
            <img src="/LinkedIn Icon.svg" alt="" />
          </span>
          <span className={styles.socialLogo}>
            <img src="/Twitter Icon.svg" alt="" />
          </span>
        </span>
      </div>
      <div className={styles.finalTerms}>
        <p className={styles.terms}>
          Terms of Use | Privacy Policy <br />
          Copyright @ 2023 QuranDreamers
        </p>
      </div>
    </footer>
  );
}

export default Bottombar;
