import { Outlet } from "react-router-dom";
import NavbarGeneral from "../NavbarGeneral";
import SidebarGeneral from "../SidebarGeneral";
import { useNavigate } from "react-router-dom";

function AppLayoutMentor() {
  const navigate = useNavigate();
  return (
    <div className="flex">
      <SidebarGeneral />
      <div className="flex-1">
        <NavbarGeneral />
        <div className="flex justify-around p-3">
          <div className="text-md mt-3 font-bold md:text-base lg:text-lg xl:text-xl">
            Mentor
          </div>
          <button
            className="rounded border border-theme bg-transparent px-2 py-2 font-semibold text-black hover:border-transparent hover:bg-theme hover:text-white"
            onClick={() => navigate(-1)}
          >
            Back
          </button>
        </div>
        <Outlet />
      </div>
    </div>
  );
}

export default AppLayoutMentor;
