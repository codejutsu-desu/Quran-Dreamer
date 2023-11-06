import styles from "./ProvideLink.module.css";
function ProvideLink() {
  return (
    <div className={styles.linkContainer}>
      <div className={styles.linkInput}>
        <label>Provide a Link for your classes in this circle</label>
        <input type="text" />
      </div>
      <div className={styles.linkInput}>
        <label>
          Provide a link for a discussion forum like WhatsApp group if
          any(*optional)
        </label>
        <input type="text" />
      </div>

      <button className={styles.doneButton}>Done</button>
    </div>
  );
}

export default ProvideLink;
