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
    <header className="flex h-auto items-center justify-between border-b border-solid  border-gray-300 p-2">
      <NavLink to="/">
        <img
          src="/logo.png"
          alt=""
          className=" hover:scale-120 object-covers h-20 w-auto transform cursor-pointer rounded-2xl transition-transform"
        />
      </NavLink>

      <ul className="  text-theme flex space-x-8 text-lg font-semibold">
        <NavLink to="/about">
          <li>About us</li>
        </NavLink>

        {token ? (
          <>
            {user_type !== "0" && (
              <NavLink to="/appLayoutStudent">
                <li>All Circles</li>
              </NavLink>
            )}
            <li onClick={handleLogout}>Logout</li>
          </>
        ) : (
          <>
            <NavLink to="/login">
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
