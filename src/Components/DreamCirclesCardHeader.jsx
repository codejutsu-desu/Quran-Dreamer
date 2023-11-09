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
          <select id="language" className={styles.selector}>
            <option value="all">All Languages</option>
            <option value="uzbek">Uzbek</option>
            <option value="urdu">Urdu</option>
            <option value="bangla">Bangla</option>
            <option value="indonesian">Indonesian</option>
          </select>
        </div>
        <div className={styles["filter-by-gender"]}>
          <select id="gender" className={styles.selector}>
            <option value="0">Filter by gender</option>
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
