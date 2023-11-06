import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchStudyCircles, fetchJoinedCircle } from "../actions";
import DreamCircleCards from "../Components/DreamCircleCards";
import DreamCirclesCardHeader from "../Components/DreamCirclesCardHeader";
import NavbarGeneral from "../Components/NavbarGeneral";
import SidebarGeneral from "../Components/SidebarGeneral";
import styles from "./DreamCirclesList.module.css";

function DreamCirclesList() {
  const dispatch = useDispatch();
  const circleData = useSelector((state) => state.studyCircles);
  const joinedCircles = useSelector((state) => state.joinedCircles);

  const [user, setUser] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(fetchStudyCircles(token));
      dispatch(fetchJoinedCircle(token));
    }
  }, [dispatch]);

  // Filter out joined circles
  const nonJoinedCircles = circleData.filter((circle) => {
    return !joinedCircles.some((joinedCircle) => joinedCircle.id === circle.id);
  });

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  return (
    <div className={styles.dreamCirclesContainer}>
      <SidebarGeneral />
      <div className={styles.mainContainer}>
        <NavbarGeneral user={user} userType="Student" />
        <DreamCirclesCardHeader nonJoinedCircles={nonJoinedCircles} />
        {/* Pass nonJoinedCircles as a prop */}
        <DreamCircleCards nonJoinedCircles={nonJoinedCircles} />
        {/* Pass a function to set nonJoinedCircles as a prop */}
      </div>
    </div>
  );
}

export default DreamCirclesList;
