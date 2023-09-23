import StudentNote from "../Components/StudentNote";
import AppLayout from "./AppLayout";
import styles from "./Notes.module.css";

function Notes() {
  return (
    <AppLayout>
      <div className={styles.studentNotesField}>
        <p className={styles.notesTitle}>Student Notes</p>
        <div className={styles.inputSearch}>
          <input
            type="text"
            className={styles.titleInput}
            placeholder="Search by title"
          />
        </div>

        <select name="Filter by category" id="filter" className={styles.filter}>
          <option value="0">Filter by category</option>
          <option value="1">Nahw</option>
          <option value="2">Sarf</option>
          <option value="3">Advance Sarf</option>
          <option value="4">Advance Nahw</option>
        </select>
      </div>
      <StudentNote />
    </AppLayout>
  );
}

export default Notes;
