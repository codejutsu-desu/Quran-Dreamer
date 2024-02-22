function StudentNotesSearch() {
  return (
    <div>
      <input
        type="text"
        className="m-auto mb-5 mt-5  block w-[500px] rounded-md border-2 border-theme p-2 active:border-hoverTheme"
        placeholder="Search by title"
      />
      <div className="m-auto flex w-[600px] flex-col items-center justify-center space-y-2">
        <div className="h-12  w-full rounded-md bg-theme  p-2 text-white ">
          {" "}
          Book 1 pdf
        </div>
        <div className="h-12  w-full rounded-md bg-theme  p-2 text-white ">
          {" "}
          Book 1 pdf
        </div>
        <div className="h-12  w-full rounded-md bg-theme  p-2 text-white ">
          {" "}
          Book 1 pdf
        </div>
        <div className="h-12  w-full rounded-md bg-theme  p-2 text-white ">
          {" "}
          Book 1 pdf
        </div>
      </div>
    </div>
  );
}

export default StudentNotesSearch;
