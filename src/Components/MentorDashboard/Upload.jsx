function Upload() {
  return (
    <div>
      <input
        type="text"
        className="m-auto mb-5 mt-5  block w-[500px] rounded-md border-2 border-theme p-2 active:border-hoverTheme"
        placeholder="Search notes"
      />
      <div className="m-auto flex w-[600px] flex-col items-center justify-center space-y-2">
        <div className="h-12  w-full rounded-md bg-theme  p-2 text-white ">
          {" "}
          Book 1 pdf
        </div>
      </div>

      <div className="mx-auto mt-6 max-w-[600px]">
        <label
          className="mb-2 block text-base font-bold  text-gray-900"
          for="file_input"
        >
          Upload file
        </label>
        <input
          className="block w-full cursor-pointer rounded-lg border border-white bg-theme p-2 text-sm text-white focus:outline-none"
          id="file_input"
          type="file"
        />
      </div>
    </div>
  );
}

export default Upload;
