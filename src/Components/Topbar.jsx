import { NavLink } from "react-router-dom";
import Dropdown from "../ui/DropdownTailwind";

function Topbar() {
  const token = localStorage.getItem("token");
  const user_type = localStorage.getItem("user_type");

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <header className="xl-h-[150px] flex h-10 items-center justify-between border-b border-solid border-gray-300 p-1  font-sans sm:h-[60px] lg:h-[80px]">
      <NavLink to="/" className=" h-full w-[70px]  ">
        <img
          src="/logo.png"
          alt=""
          className="h-full cursor-pointer object-fill transition-all  hover:scale-110 "
        />
      </NavLink>

      <ul className="   flex space-x-8 text-base font-semibold text-theme sm:text-2xl">
        <NavLink to="/about" className="flex items-center">
          <li>About us</li>
        </NavLink>

        {token ? (
          <>
            {user_type !== "0" ? (
              <NavLink
                to={
                  user_type === "2" ? "/appLayoutStudent" : "/appLayoutMentor"
                }
                className="flex items-center"
              >
                <li>All Circles</li>
              </NavLink>
            ) : (
              <NavLink to="./adminDashboardLayout">
                <li>Dashboard</li>
              </NavLink>
            )}
            <li className="cursor-pointer" onClick={handleLogout}>
              Logout
            </li>
          </>
        ) : (
          <>
            <NavLink to="/login" className="flex items-center">
              <li>Login</li>
            </NavLink>
            <Dropdown />
          </>
        )}
      </ul>
    </header>
  );
}

export default Topbar;
