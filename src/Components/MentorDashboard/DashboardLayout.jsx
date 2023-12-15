import NavbarGeneral from "../NavbarGeneral";
import { Outlet } from "react-router-dom";
import MentorDashboardNav from "./MentorDashboardNav";
function DashboardLayout() {
  return (
    <div>
      <NavbarGeneral />
      <MentorDashboardNav />
      <Outlet />
    </div>
  );
}

export default DashboardLayout;
