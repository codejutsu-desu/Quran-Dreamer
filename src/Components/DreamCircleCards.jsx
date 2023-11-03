import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchStudyCircles } from "../actions"; // Import your action here
import DreamCircleCard from "./DreamCircleCard";
import styles from "./DreamCircleCards.module.css";

function DreamCircleCards() {
  const dispatch = useDispatch();
  const circleData = useSelector((state) => state.studyCircles);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(fetchStudyCircles(token));
    }
  }, [dispatch]);

  return (
    <div className={styles.cardContainer}>
      {circleData.map((circle) => (
        <DreamCircleCard key={circle.id} circle={circle} />
      ))}
    </div>
  );
}

export default DreamCircleCards;
