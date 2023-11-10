import styles from "./DreamCirclesCardHeader.module.css";
import PropTypes from "prop-types";

// import { useSelector, useDispatch } from "react-redux";
// import { fetchStudyCircles } from "../actions"; // Import your action here
// import { useEffect } from "react";

function DreamCirclesCardHeader({ nonJoinedCircles }) {
  // const dispatch = useDispatch();
  // const circleData = useSelector((state) => state.studyCircles);

  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   if (token) {
  //     dispatch(fetchStudyCircles(token));
  //   }
  // }, [dispatch]);

  return (
    <div className={styles.circleCardHeader}>
      <div className={styles.circleNumbers}>
        <div className={styles.circleNumbersText}>Dream Circles</div>
        <div className={styles.circleNumbersOnly}>
          There are only {nonJoinedCircles.length} dream circles available
        </div>
      </div>
      <div className={styles["selector-container"]}>
        <div className={styles["filter-by-language"]}>
          <label>Language</label>
          <select id="language" className={styles.selector}>
            <option value="all">All Languages</option>
            <option value="0">English</option>
            <option value="1">Urdu</option>
            <option value="2">Indonesian</option>
            <option value="3">Uzbek</option>
          </select>
        </div>
        <div className={styles["filter-by-gender"]}>
          <label>Gender</label>
          <select id="gender" className={styles.selector}>
            <option value="0">Both</option>
            <option value="1">Male</option>
            <option value="2">Female</option>
          </select>
        </div>
      </div>
    </div>
  );
}

DreamCirclesCardHeader.propTypes = {
  nonJoinedCircles: PropTypes.array.isRequired,
};

export default DreamCirclesCardHeader;
