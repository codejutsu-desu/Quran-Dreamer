import NavbarGeneral from "../NavbarGeneral";

import { Outlet } from "react-router-dom";
import StudentDashboardNav from "./StudentDashboardNav";

function DashboardLayoutStudent() {
  return (
    <div>
      <NavbarGeneral />
      <StudentDashboardNav />
      <Outlet />
    </div>
  );
}

export default DashboardLayoutStudent;
