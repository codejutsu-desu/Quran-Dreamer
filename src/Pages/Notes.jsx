import StudentNote from "../Components/StudentNote";
import StudentNotesSearch from "../Components/StudentNotesSearch";
import AppLayout from "./AppLayout";

function Notes() {
  return (
    <AppLayout>
      <StudentNotesSearch />
      <StudentNote />
    </AppLayout>
  );
}

export default Notes;
