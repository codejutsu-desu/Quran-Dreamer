import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchClassRecordings } from "../../actions";
import styles from "./LiveClasses.module.css";
import { useParams } from "react-router-dom";
import ClassRecording from "./ClassRecording";

function LiveClasses({ circle }) {
  const { circleId } = useParams();
  const { class_link } = circle;

  const dispatch = useDispatch();

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      dispatch(fetchClassRecordings(token, circleId)); // Assuming you have access to circleId
    }
  }, [dispatch, token, circleId]);

  const classRecordings = useSelector((state) => state.classRecordings);

  return (
    <div className={styles.liveContainer}>
      <div className={styles.liveRecord}>
        <div className={styles.live}>
          <h3> Live Classes </h3>
          <p>
            *Note: Join live classes at sharp time given otherwise you can take
            them later as recorded lectures.
          </p>
          <p> {class_link} </p>
        </div>
        <div className={styles.record}>
          <h3>Recorded class</h3>
          {classRecordings.map((classRecording) => (
            <ClassRecording
              classRecording={classRecording}
              key={classRecording.id}
            />
          ))}
        </div>
      </div>
      <div className={styles.discussionForum}>
        <h3>Discussion Forum </h3>
        <p>NOT YET AVAILABLE</p>
      </div>
    </div>
  );
}

LiveClasses.propTypes = {
  circle: PropTypes.object.isRequired,
};

export default LiveClasses;
