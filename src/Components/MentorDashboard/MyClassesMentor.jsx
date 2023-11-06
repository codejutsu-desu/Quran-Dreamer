import styles from "./MyClassesMentor.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCreatedCircle } from "../../actions"; // Import your action
import MyOwnCircle from "./MyOwnCircle";

function MyClassesMentor() {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token"); // Get user token from local storage

  useEffect(() => {
    if (token) {
      dispatch(fetchCreatedCircle(token)); // Dispatch the action to fetch study circles
    }
  }, [dispatch, token]);

  const studyCircles = useSelector((state) => state.createdCircles);

  return (
    <div className={styles.cardContainer}>
      {studyCircles.map((circle) => (
        <MyOwnCircle key={circle.id} circle={circle} />
      ))}
    </div>
  );
}

export default MyClassesMentor;
