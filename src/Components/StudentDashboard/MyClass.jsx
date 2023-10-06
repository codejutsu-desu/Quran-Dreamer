import ClassTimeCard from "../ClassTimeCard";
import styles from "./MyClass.module.css";
function MyClass() {
  return (
    <div className={styles.classesContainer}>
      <div className={styles.upClasses}>
        <h2>Upcoming Class</h2>
        <ClassTimeCard />
      </div>
      <div className={styles.prevClasses}>
        <h2>Previous Class</h2>
        <ClassTimeCard />
      </div>
    </div>
  );
}

export default MyClass;
