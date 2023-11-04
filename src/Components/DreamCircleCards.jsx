import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchStudyCircles, fetchJoinedCircle } from "../actions";
import DreamCircleCard from "./DreamCircleCard";
import styles from "./DreamCircleCards.module.css";
import PropTypes from "prop-types";

function DreamCircleCards({ setNonJoinedCircles }) {
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

  useEffect(() => {
    setNonJoinedCircles(nonJoinedCircles);
  }, [nonJoinedCircles]);

  return (
    <div className={styles.cardContainer}>
      {nonJoinedCircles.map((circle) => (
        <DreamCircleCard key={circle.id} circle={circle} />
      ))}
    </div>
  );
}

DreamCircleCards.propTypes = {
  setNonJoinedCircles: PropTypes.func.isRequired, // Validate setNonJoinedCircles as a function
};

export default DreamCircleCards;
