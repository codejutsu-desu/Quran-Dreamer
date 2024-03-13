import axios from "axios";
import React, { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

function Upload() {
  const [file, setFile] = useState(null);
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

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      toast.error("No file Selected");
      return;
    }

    try {
      const token = localStorage.getItem("token");

      const formData = new FormData();
      formData.append("file", file);
      const response = await axios.post(
        "https://fmr4zl8hr6.execute-api.ap-south-1.amazonaws.com/v1/uploads/",
        formData,
        {
          headers: {
            "Content-Type": "form-data",
            Authorization: `Bearer ${token}`,
          },
        },
      );
      console.log(response);
      toast.success("Upload successful, Wait for verification");
      return response;
    } catch (error) {
      console.log(error);
      toast.error(error.message || "Error uploading file");
    }
  };

  return (
    <div>
      <Toaster />
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
      <div className="mx-auto mt-6 max-w-[600px]">
        <label
          className="mb-2 block text-base font-bold text-gray-900"
          htmlFor="file_input"
        >
          Upload file
        </label>
        <input
          className="block w-full cursor-pointer rounded-lg border border-white bg-theme p-2 text-sm text-white focus:outline-none"
          id="file_input"
          type="file"
          onChange={handleFileChange}
        />
        <button
          className="mx-auto mt-4 block rounded-lg border-2 border-theme p-3 hover:bg-theme"
          onClick={handleUpload}
        >
          Upload
        </button>
      </div>
    </div>
  );
}

export default Upload;
