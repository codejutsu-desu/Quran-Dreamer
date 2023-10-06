import { useState } from "react";
import NavbarMentor from "../Components/NavbarMentor";
import styles from "./AdminDashboard.module.css";
import AdminAll from "../Components/AdminDashboard/AdminAll";
import AdminGroups from "../Components/AdminDashboard/AdminGroups";
import AdminMain from "../Components/AdminDashboard/AdminMain";
import AdminRequests from "../Components/AdminDashboard/AdminRequests";
function AdminDashboard() {
  const [component, setComponent] = useState();

  const main = () => {
    setComponent("main");
  };
  const requests = () => {
    setComponent("requests");
  };
  const allAdmins = () => {
    setComponent("allAdmins");
  };
  const groups = () => {
    setComponent("groups");
  };

  return (
    <div className={styles.dashboardStudentContainer}>
      <NavbarMentor />
      <div className={styles.dashboardNav}>
        <div className={styles.icon}>
          <img src="/dashboardHome.svg" alt="Icon" />
        </div>
        <div className={styles.title}>
          <button onClick={main}>Main</button>
          <button onClick={requests}>Requests</button>
          <button onClick={allAdmins}>All Admins</button>
          <button onClick={groups}>Groups</button>
        </div>
      </div>
      {component === "main" && <AdminMain />}
      {component === "requests" && <AdminRequests />}
      {component === "allAdmins" && <AdminAll />}
      {component === "groups" && <AdminGroups />}
    </div>
  );
}

export default AdminDashboard;
