import { NavLink } from "react-router-dom";
import { Notebook } from "lucide-react";
import { LayoutDashboard } from "lucide-react";

function SidebarGeneral({ open, onClose }) {
  const user_type = localStorage.getItem("user_type");

  return (
    <aside
      id="logo-sidebar"
      className={`${
        open ? "flex " : "hidden"
      }   relative min-h-screen  w-[100px] justify-center bg-black pt-5 transition-transform sm:w-[150px]  md:flex lg:w-[200px] xl:w-[250px]`}
    >
      {open ? (
        <div
          className=" absolute right-2 top-1 cursor-pointer"
          onClick={onClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-x-circle 
          "
          >
            <circle cx="12" cy="12" r="10" />
            <path d="m15 9-6 6" />
            <path d="m9 9 6 6" />
          </svg>
        </div>
      ) : null}
      <div className=" h-full shrink   bg-transparent   ">
        <ul className="space-y-8 ">
          <li className="mt-4">
            <NavLink to="/">
              <img
                src="/logo.png"
                alt=""
                className="ml-auto mr-auto h-[70px] rounded-2xl md:h-[90px] lg:h-[100px] xl:h-[120px]"
              />
            </NavLink>
          </li>
          {user_type === "1" ? (
            <li className="mt-5">
              <NavLink to="/dashboardMentorLayout">
                <div
                  href="#"
                  className="group flex items-center rounded-lg p-0 px-1 text-white hover:bg-theme"
                >
                  <LayoutDashboard className="text-slate-500" />

                  <span className="ml-1 flex-1 whitespace-nowrap  font-sans text-[8px]  font-bold sm:text-[16px] lg:text-[20px]">
                    Dashboard
                  </span>
                </div>
              </NavLink>
              <div className="mt-4">
                <NavLink to={`uploadNotes`}>
                  <div className="mt-4">
                    <div
                      href="uploadNotes"
                      className="group flex items-center rounded-lg px-1 text-white hover:bg-theme"
                    >
                      <Notebook className="text-slate-500" />

                      <span className=" ml-1 flex-1 whitespace-nowrap  font-sans text-[8px]  font-bold sm:text-[16px] lg:text-[20px]">
                        Upload Notes{" "}
                      </span>
                    </div>
                  </div>
                </NavLink>
              </div>
            </li>
          ) : (
            <>
              <NavLink to="/studentDashboard">
                <li className="mt-4">
                  <div
                    href="#"
                    className="group flex items-center rounded-lg px-1 text-white hover:bg-theme"
                  >
                    <LayoutDashboard className="text-slate-500" />
                    <span className="ml-1 flex-1 whitespace-nowrap  font-sans text-[8px]  font-bold sm:text-[16px] lg:text-[20px]">
                      Dashboard
                    </span>
                  </div>
                </li>
              </NavLink>
              <NavLink to={`/appLayoutStudent/allNotes`}>
                <li className="mt-4">
                  <div
                    href="#"
                    className="group flex items-center rounded-lg px-1 text-white hover:bg-theme"
                  >
                    <Notebook className="text-slate-500" />
                    <span className=" ml-1 flex-1 whitespace-nowrap  font-sans text-[8px]  font-bold sm:text-[16px] lg:text-[20px]">
                      Student Notes
                    </span>
                  </div>
                </li>
              </NavLink>
            </>
          )}
        </ul>
      </div>
    </aside>
  );
}

export default SidebarGeneral;
