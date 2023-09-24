import AppLayout from "./AppLayout";
import styles from "./StudentsNotesFiles.module.css";

function StudentsNoteFiles() {
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
      </div>
      <div className={styles.noteFiles}>
        <button className={styles.noteFile}>Books 1.pdf </button>
        <button className={styles.noteFile}>Books 2.pdf </button>
        <button className={styles.noteFile}>Books 3.pdf </button>
        <button className={styles.noteFile}>Books 4.pdf </button>
      </div>
    </AppLayout>
  );
}

export default StudentsNoteFiles;
