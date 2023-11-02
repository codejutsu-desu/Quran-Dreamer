import { useState } from "react";
import NavbarGeneral from "../Components/NavbarGeneral";
import StudentDashboardNav from "../Components/StudentDashboard/StudentDashboardNav";
// import styles from "./DashboardClasses.module.css";s
import JoinedCircles from "../Components/JoinedCircles";
import { useNavigate } from "react-router-dom";

function DashboardClasses() {
  const navigate = useNavigate();
  const [component, setComponent] = useState("My Circles");

  const newComponent = (buttonName) => {
    setComponent(buttonName);
  };
  return (
    <div>
      <NavbarGeneral user="Myself" userType="Student" />
      <StudentDashboardNav newComponent={newComponent} />
      {component == "My Circles" && <JoinedCircles />}
      {component == "My Classes" && <p>Hello</p>}
      {component == "+ Join a Circle" && navigate("/dreamCircles")}
    </div>
  );
}

export default DashboardClasses;
