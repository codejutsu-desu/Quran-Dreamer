import styles from "./Bottombar.module.css";

function Bottombar() {
  return (
    <footer className={styles.footer}>
      <img className={styles.logo} src="/logo.png" alt="" />

      <div className={styles.connect}>
        <p>Reach us</p>
        <span className={styles.socialLogos}>
          <a
            href="https://instagram.com/quran.dreamers?igshid=NGVhN2U2NjQ0Yg=="
            target="_blank"
            className={styles.socialLogo}
            rel="noreferrer"
          >
            <img src="/Instagram Icon.svg" alt="Instagram" />
          </a>
          <a
            href="https://www.youtube.com/@QuranDreamers/featured"
            target="_blank"
            className={styles.socialLogo}
            rel="noreferrer"
          >
            <img src="/youtubeicon.svg" alt="YouTube" />
          </a>
        </span>
      </div>
      <div className={styles.finalTerms}>
        <p className={styles.terms}>
          Terms of Use |
          <a
            href="https://s3.ap-south-1.amazonaws.com/www.qurandreamers.com/QdPP+ver.3.pdf"
            target="blank"
          >
            Privacy Policy
          </a>
          <br />
          Copyright @ 2023 QuranDreamers
        </p>
      </div>
    </footer>
  );
}

export default Bottombar;
