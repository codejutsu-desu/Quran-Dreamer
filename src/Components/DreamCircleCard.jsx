import styles from "./DreamCircleCard.module.css";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const categoryNames = {
  0: "Nahw Basics",
  1: "Sarf Basic",
  2: "Intermediate Nahw",
  3: "Advance Nahw",
  4: "Advanced Sarf",
  5: "Basic Reader",
  6: "Intermediate Reader",
  7: "Advanced Reader",
};

function extractInitials(name) {
  // Split the name into words
  const words = name.split(" ");
  // Extract the first letter of each word
  const initials = words.map((word) => word[0]);
  // Join the initials to form the logo
  return initials.join("");
}

function calculateTimePercentage(fromDate, toDate) {
  const from = new Date(fromDate);
  const to = new Date(toDate);
  const today = new Date();

  const totalTime = to - from;
  const timePassed = today - from;

  if (today <= from) {
    return 0;
  } else if (today >= to) {
    return 100;
  }

  return ((timePassed / totalTime) * 100).toFixed(2);
}

function calculateDaysLeft(toDate) {
  const to = new Date(toDate);
  const today = new Date();

  if (today >= to) {
    return "Session Expired";
  }

  const timeDifference = to - today;
  const daysLeft = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  return `${daysLeft} days left`;
}

function DreamCircleCard({ circle }) {
  const {
    owner_name,
    about_circle,
    category,
    from_date,
    to_date,
    num_joined_users,
  } = circle;

  console.log(to_date, from_date);
  const categoryName = categoryNames[category];
  const logoInitials = extractInitials(categoryName);
  const percentage = calculateTimePercentage(from_date, to_date);
  const daysLeft = calculateDaysLeft(to_date);

  let knowMoreLink = null;

  if (daysLeft !== "Session Expired") {
    knowMoreLink = (
      <NavLink to={`/circleInfo/${circle.id}`} className={styles.knowMoreLink}>
        <div className={styles.knowMore}> Know More</div>
      </NavLink>
    );
  }

  return (
    <div className={styles.cardContainer}>
      <div className={styles.title}>
        <div className={styles.sectionLogo}>{logoInitials}</div>
        <div className={styles.titleName}>
          <div className={styles.sectionTitle}>{categoryName}</div>
          <div className={styles.sectionLead}>{owner_name}</div>
        </div>
      </div>
      <div className={styles.description}>{about_circle}</div>

      <div className={styles.progresBar}>
        <div className={styles.membersandpercentage}>
          <div className={styles.members}>{num_joined_users} Members</div>
          <div className={styles.percentage}>{percentage}%</div>
        </div>
        <div className={styles.progressContainer}>
          <div
            className={styles.progress}
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      </div>

      <div className={styles.cardBottom}>
        {knowMoreLink}
        <div className={styles.daysLeft}>{daysLeft}</div>
      </div>
    </div>
  );
}

DreamCircleCard.propTypes = {
  circle: PropTypes.object.isRequired,
};

export default DreamCircleCard;
