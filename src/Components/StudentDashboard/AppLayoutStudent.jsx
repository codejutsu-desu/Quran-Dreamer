import { Outlet } from "react-router-dom";
import NavbarGeneral from "../NavbarGeneral";
import SidebarGeneral from "../SidebarGeneral";
import { useState } from "react";
function AppLayoutStudent() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex ">
      <SidebarGeneral open={open} onClose={() => setOpen(false)} />
      <div className="flex-1">
        <NavbarGeneral open={open} setOpen={() => setOpen(true)} />
        <Outlet />
      </div>
    </div>
  );
}

export default AppLayoutStudent;
