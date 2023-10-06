import styles from "./DreamCircleCard.module.css";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

function DreamCircleCard({ circle }) {
  const { owner_name, about_circle } = circle;
  return (
    <div className={styles.cardContainer}>
      <div className={styles.title}>
        <div className={styles.sectionLogo}>NB</div>
        <div className={styles.titleName}>
          <div className={styles.sectionTitle}>{about_circle}</div>
          <div className={styles.sectionLead}>{owner_name}</div>
        </div>
      </div>
      <div className={styles.description}>
        Lorem ipsum dolor sit amet consectetur. Nisl lobortis in sit elementum
        laoreet phasellus phasellus. Porta volutpat arcu sed amet eget placerat
        aenean quam convallis.
      </div>

      <div className={styles.progresBar}>
        <div className={styles.membersandpercentage}>
          <div className={styles.members}>6 members</div>
          <div className={styles.percentage}>18%</div>
        </div>
        <div className={styles.progressContainer}>
          <div className={styles.progress} style={{ width: "18%" }}></div>
        </div>
      </div>

      <div className={styles.cardBottom}>
        <NavLink to={`/circleInfo/${circle.id}`}>
          <div className={styles.knowMore}> Know More</div>
        </NavLink>
        <div className={styles.daysLeft}>75 days left</div>
      </div>
    </div>
  );
}

DreamCircleCard.propTypes = {
  circle: PropTypes.object.isRequired,
};

export default DreamCircleCard;
