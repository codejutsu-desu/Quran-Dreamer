import DreamCircleCard from "./DreamCircleCard";
import styles from "./DreamCircleCards.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchJoinedCircle, fetchStudyCircles } from "../actions";

function DreamCircleCards() {
  const dispatch = useDispatch();
  const circleData = useSelector((state) => state.studyCircles);
  const joinedCircles = useSelector((state) => state.joinedCircles);

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

  return (
    <div className={styles.cardContainer}>
      {nonJoinedCircles.map((circle) => (
        <DreamCircleCard key={circle.id} circle={circle} />
      ))}
    </div>
  );
}

export default DreamCircleCards;
