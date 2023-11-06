import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCreatedCircle } from "../../actions"; // Import your action
import MyOwnCircle from "./MyOwnCircle"; // Import the MyOwnCircle component
import styles from "./MyOwnCircles.module.css";

function MyOwnCircles() {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token"); // Get user token from local storage
  // const user = localStorage.getItem("user"); // Get user from local storage

  useEffect(() => {
    if (token) {
      dispatch(fetchCreatedCircle(token)); // Dispatch the action to fetch study circles
    }
  }, [dispatch, token]);

  const studyCircles = useSelector((state) => state.createdCircles);

  // const myCircles = studyCircles.filter((circle) => circle.owner_name === user);

  return (
    <div className={styles.cardContainer}>
      {studyCircles.map((circle) => (
        <MyOwnCircle key={circle.id} circle={circle} />
      ))}
    </div>
  );
}

export default MyOwnCircles;
