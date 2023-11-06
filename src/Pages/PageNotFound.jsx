import styles from "./PageNotFound.module.css";

function PageNotFound() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404 - Page Not Found</h1>
      <p className={styles.message}>
        Sorry, the page you are looking for does not exist. Or the feature is
        not yet available for this testing.
      </p>
    </div>
  );
}

export default PageNotFound;
