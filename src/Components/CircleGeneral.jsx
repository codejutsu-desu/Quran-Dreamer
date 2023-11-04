import styles from "./CircleGeneral.module.css";
import PropTypes from "prop-types";

function calculateTimeDuration(startTime, endTime) {
  const startTimeParts = startTime.split(":").map(Number);
  const endTimeParts = endTime.split(":").map(Number);

  const startSeconds =
    startTimeParts[0] * 3600 + startTimeParts[1] * 60 + startTimeParts[2];
  const endSeconds =
    endTimeParts[0] * 3600 + endTimeParts[1] * 60 + endTimeParts[2];

  const durationSeconds = endSeconds - startSeconds;

  const hours = Math.floor(durationSeconds / 3600);
  const minutes = Math.floor((durationSeconds % 3600) / 60);

  return `${hours} hours ${minutes} minutes.`;
}

function getDayName(dayNumber) {
  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return dayNames[dayNumber - 1]; // Subtract 1 to match array index
}

function CircleGeneral({ circle }) {
  const { from_date, to_date, about_circle, days, times } = circle;
  const classDays = Array.isArray(days)
    ? days.map((dayNumber) => getDayName(dayNumber)).join(", ")
    : "N/A";

  const duration =
    Array.isArray(times) && times.length >= 2
      ? calculateTimeDuration(times[0], times[1])
      : "N/A";

  return (
    <div className={styles.circleGeneralContainer}>
      <div className={styles.generalInfo}>
        <h2>General Information</h2>
        <div className={styles.generalInfoText}>
          <div>Class Duration</div>
          <div>{duration}</div>
        </div>
        <div className={styles.generalInfoText}>
          <div>Class days</div>
          <div>{classDays}</div>
        </div>
        <div className={styles.generalInfoText}>
          <div>Class timing</div>
          <div>Upcoming-</div>
        </div>
        <div className={styles.generalInfoText}>
          <div>Class length</div>
          <div>
            From {from_date} to {to_date}
          </div>
        </div>
        <div className={styles.generalInfoText}>
          <div>About</div>
          <div>{about_circle}</div>
        </div>
      </div>
      <div className={styles.prerequisite}>
        <h2>Prerequisite</h2>
        <ul className={styles.prerequisiteUl}>
          <li>This Feature will be available from next version</li>
          <li>This Feature will be available from next version</li>
          <li>This Feature will be available from next version</li>
          <li>This Feature will be available from next version</li>
        </ul>
      </div>
    </div>
  );
}

CircleGeneral.propTypes = {
  circle: PropTypes.object.isRequired,
};

export default CircleGeneral;
