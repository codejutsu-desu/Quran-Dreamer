function AdminMain() {
  const user = localStorage.getItem("user");

  return (
    <div className="ml-auto mr-auto flex h-[350px]  w-1/2 flex-col items-center justify-center border-2 border-solid border-theme  ">
      <div className="ml-auto mr-auto mt-3 h-[100px] w-[100px] rounded-[50%] border-2 border-solid border-theme md:h-[150px] md:w-[150px] lg:h-[200px]  lg:w-[200px]"></div>
      <div className="mt-2 text-base font-extrabold md:text-lg lg:text-xl xl:text-2xl">
        Change Profile Picture
      </div>
      <div className="mt-2">
        <h2 className="text-center text-base font-bold lg:text-lg xl:text-xl">
          Adminstrator
        </h2>
        <h3 className="mt-2 text-center text-base lg:text-lg xl:text-xl">
          {user}
        </h3>
      </div>
    </div>
  );
}

export default AdminMain;
