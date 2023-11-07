import styles from "./MyClassesMentor.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchJoinedCircle } from "../../actions"; // Import your action
import MyOwnCircle from "./MyOwnCircle";

function MyClassesMentor() {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token"); // Get user token from local storage

  useEffect(() => {
    if (token) {
      dispatch(fetchJoinedCircle(token)); // Dispatch the action to fetch study circles
    }
  }, [dispatch, token]);

  const joinedCircles = useSelector((state) => state.joinedCircles);

  return (
    <div className={styles.cardContainer}>
      {joinedCircles.map((circle) => (
        <MyOwnCircle key={circle.id} circle={circle} />
      ))}
    </div>
  );
}

export default MyClassesMentor;
