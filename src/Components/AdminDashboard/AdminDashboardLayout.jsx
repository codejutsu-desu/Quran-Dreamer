import { Outlet } from "react-router-dom";
import NavbarGeneral from "../NavbarGeneral";
import styles from "./AdminDashboardLayout.module.css";
import AdminDashboardNav from "./AdminDashboardNav";
function AdminDashboardLayout() {
  return (
    <div className={styles.mainDashboard}>
      <NavbarGeneral />
      <AdminDashboardNav />
      <Outlet />
    </div>
  );
}

export default AdminDashboardLayout;
