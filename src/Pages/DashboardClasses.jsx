import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchJoinedCircle } from "../actions";
import NavbarGeneral from "../Components/NavbarGeneral";
import StudentDashboardNav from "../Components/StudentDashboard/StudentDashboardNav";
import JoinedCircles from "../Components/JoinedCircles";
import MyClasses from "../Components/MyClasses";
import { useNavigate } from "react-router-dom";

function DashboardClasses() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const circleData = useSelector((state) => state.joinedCircles);

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token);
    if (token) {
      dispatch(fetchJoinedCircle(token));
    }
  }, [dispatch]);

  // State to keep track of the selected component
  const [component, setComponent] = useState("My Circles");

  // Function to switch the selected component and store it in local storage
  const newComponent = (buttonName) => {
    setComponent(buttonName);
    localStorage.setItem("selectedComponent", buttonName); // Store the selected component
  };

  useEffect(() => {
    const storedComponent = localStorage.getItem("selectedComponent");
    if (storedComponent) {
      setComponent(storedComponent); // Set newComponent to the value from local storage
    }
  }, []); // Empty dependency array to run this effect only once, after the initial render

  return (
    <div>
      <NavbarGeneral />
      <StudentDashboardNav newComponent={newComponent} />
      {component === "My Circles" && <JoinedCircles circleData={circleData} />}
      {component === "My Classes" && <MyClasses circleData={circleData} />}
      {component === "+ Join a Circle" && navigate("/dreamCircles")}
    </div>
  );
}

export default DashboardClasses;
