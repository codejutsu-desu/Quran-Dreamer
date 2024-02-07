import { Outlet } from "react-router-dom";
import NavbarGeneral from "../NavbarGeneral";
import SidebarGeneral from "../SidebarGeneral";
function AppLayoutStudent() {
  return (
    <div className="flex">
      <SidebarGeneral />
      <div className="flex-1">
        <NavbarGeneral />
        <Outlet />
      </div>
    </div>
  );
}

export default AppLayoutStudent;
