import CircleClass from "./CircleClass";
import styles from "./MyClasses.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchJoinedCircle } from "../actions";

function MyClasses() {
  const dispatch = useDispatch();
  const circleData = useSelector((state) => state.joinedCircles);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(fetchJoinedCircle(token));
    }
  }, [dispatch]);
  return (
    <div className={styles.mainContainer}>
      <p>You Class links are listed here</p>

      {circleData.map((circle) => (
        <CircleClass circle={circle} key={circle.id} />
      ))}
    </div>
  );
}

export default MyClasses;
