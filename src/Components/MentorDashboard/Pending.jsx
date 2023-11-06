import styles from "./Pending.module.css";
function Pending() {
  return (
    <div className={styles.mainPending}>
      Your Request for Circle Creation has been sent to our admins. Once they
      approve it, you will be able to enter into your circle.
    </div>
  );
}

export default Pending;
