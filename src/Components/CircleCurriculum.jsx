import styles from "./CircleCurriculum.module.css";
function CircleCurriculum() {
  return (
    <div className={styles.prerequisite}>
      <h2>Curriculum</h2>
      <ul className={styles.prerequisiteUl}>
        <li>Introduction</li>
        <li>4 Properties </li>
        <li>Pronouns </li>
        <li>Fragments </li>
        <li>Jumlah Ismiyyah</li>
      </ul>
    </div>
  );
}

export default CircleCurriculum;
