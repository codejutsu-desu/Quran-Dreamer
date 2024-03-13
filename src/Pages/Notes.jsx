import axios from "axios";
import { useEffect, useState } from "react";

function Notes() {
  const [notes, setNotes] = useState([]);
  const fetchNotes = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.get(
        "https://fmr4zl8hr6.execute-api.ap-south-1.amazonaws.com/v1/uploads/",
        {
          headers: {
            "Content-Type": "form-data",
            Authorization: `Bearer ${token}`,
          },
        },
      );
      return response.data;
    } catch (error) {
      console.error(error);
      throw new Error("Error fetching notes");
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const notesData = await fetchNotes();
        setNotes(notesData);
        console.log(notes);
      } catch (error) {
        console.error(error);
        toast.error("Error fetching notes");
      }
    };

    fetchData();
  }, []);
  return (
    <div className="m-3">
      <input
        type="text"
        className="m-auto mb-5 mt-5 block w-[500px] rounded-md border-2 border-theme p-2 active:border-hoverTheme"
        placeholder="Search notes"
      />
      <div className="m-auto flex w-[600px] flex-col items-center justify-center space-y-2">
        {notes.map((note) => (
          <a
            href={note.file}
            className="h-12 w-full cursor-pointer rounded-md bg-theme p-2 text-white hover:bg-hoverTheme"
          >
            {note.id}- {note.title}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Notes;
