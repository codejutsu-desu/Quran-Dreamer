import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchJoinedCircle } from "../actions";
import styles from "./JoinedCircles.module.css";
import JoinedCircle from "./JoinedCircle";

function JoinedCircles() {
  const dispatch = useDispatch();
  const circleData = useSelector((state) => state.joinedCircles);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(fetchJoinedCircle(token));
    }
  }, [dispatch]);

  return (
    <div className={styles.cardContainer}>
      {circleData.map((circle) => (
        <JoinedCircle key={circle.id} circle={circle} />
      ))}
    </div>
  );
}

export default JoinedCircles;
