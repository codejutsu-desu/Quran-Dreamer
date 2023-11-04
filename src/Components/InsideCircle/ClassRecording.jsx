import PropTypes from "prop-types";
import styles from "./ClassRecording.module.css";

function ClassRecording({ classRecording }) {
  const { date, recording_link } = classRecording;
  return (
    <p className={styles.main}>
      {recording_link} <span>{date}</span>
    </p>
  );
}

ClassRecording.propTypes = {
  classRecording: PropTypes.object.isRequired,
};

export default ClassRecording;
