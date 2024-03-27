import styles from "./MyClassesMentor.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchJoinedCircle } from "../../actions"; // Import your action
import MyJoinedCircle from "./MyJoinedCircle";
function MyClassesMentor() {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      dispatch(fetchJoinedCircle(token));
    }
  }, [dispatch, token]);

  const joinedCircles = useSelector((state) => state.joinedCircles);

  return (
    <div className={styles.cardContainer}>
      {joinedCircles.map((circle) => (
        <MyJoinedCircle key={circle.id} circle={circle} />
      ))}
    </div>
  );
}

export default MyClassesMentor;
