import styles from "./StudentNotesSearch.module.css";
function StudentNotesSearch() {
  return (
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
  );
}

export default StudentNotesSearch;
