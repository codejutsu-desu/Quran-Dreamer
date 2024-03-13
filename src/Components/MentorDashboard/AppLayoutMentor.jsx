import { Outlet } from "react-router-dom";
import NavbarGeneral from "../NavbarGeneral";
import SidebarGeneral from "../SidebarGeneral";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function AppLayoutMentor() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  return (
    <div className="flex">
      <SidebarGeneral open={open} onClose={() => setOpen(false)} />
      <div className="flex-1">
        <NavbarGeneral open={open} setOpen={() => setOpen(true)} />
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
