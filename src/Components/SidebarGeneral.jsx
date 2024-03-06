import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";

function SidebarGeneral({ open, onClose }) {
  const user_type = localStorage.getItem("user_type");
  let { circleId } = useParams();
  console.log(open);

  return (
    <aside
      id="logo-sidebar"
      className={`${
        open ? "flex" : "hidden"
      }   min-h-screen w-[100px]  justify-center bg-black pt-5 transition-transform sm:w-[150px]  md:flex lg:w-[200px] xl:w-[250px]`}
    >
      {open ? (
        <div
          className="absolute left-28 top-1 cursor-pointer"
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
                  <svg
                    className="h-3 w-3 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white lg:h-5 lg:w-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 21"
                  >
                    <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                    <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                  </svg>
                  <span className="ml-1 flex-1 whitespace-nowrap  font-sans text-[8px]  font-bold sm:text-[16px] lg:text-[20px]">
                    Dashboard
                  </span>
                </div>
              </NavLink>
            </li>
          ) : (
            <NavLink to="/studentDashboard">
              <li className="mt-4">
                <div
                  href="#"
                  className="group flex items-center rounded-lg px-1 text-white hover:bg-theme"
                >
                  <svg
                    className="h-3 w-3 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white lg:h-5 lg:w-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 18"
                  >
                    <path
                      d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857

 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z"
                    />
                  </svg>
                  <span className="ml-1 flex-1 whitespace-nowrap  font-sans text-[8px]  font-bold sm:text-[16px] lg:text-[20px]">
                    Dashboard
                  </span>
                </div>
              </li>
            </NavLink>
          )}

          {circleId && (
            <NavLink to={`/appLayoutStudent/insideCircle/${circleId}/notes`}>
              <li className="mt-4">
                <div
                  href="#"
                  className="group flex items-center rounded-lg px-1 text-white hover:bg-theme"
                >
                  <svg
                    className="h-3 w-3 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white lg:h-5 lg:w-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 18"
                  >
                    <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                  </svg>
                  <span className=" ml-1 flex-1 whitespace-nowrap  font-sans text-[8px]  font-bold sm:text-[16px] lg:text-[20px]">
                    Student Notes
                  </span>
                </div>
              </li>
            </NavLink>
          )}
          {user_type === "1" && (
            <div className="mt-4">
              <NavLink to={`uploadNotes`}>
                <li className="mt-4">
                  <div
                    href="#"
                    className="group flex items-center rounded-lg px-1 text-white hover:bg-theme"
                  >
                    <svg
                      className="h-3 w-3 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white lg:h-5 lg:w-5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 18 18"
                    >
                      <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                    </svg>
                    <span className=" ml-1 flex-1 whitespace-nowrap  font-sans text-[8px]  font-bold sm:text-[16px] lg:text-[20px]">
                      Upload Notes{" "}
                    </span>
                  </div>
                </li>
              </NavLink>
            </div>
          )}
        </ul>
      </div>
    </aside>
  );
}

export default SidebarGeneral;
