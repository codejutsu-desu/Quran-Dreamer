import styles from "./DreamCirclesCardHeader.module.css";

import PropTypes from "prop-types";

function DreamCirclesCardHeader({
  selectedLanguage,
  selectedGender,
  onLanguageChange,
  onGenderChange,
  filteredCircles,
}) {
  const handleLanguageChange = (e) => {
    onLanguageChange(e.target.value);
  };

  const handleGenderChange = (e) => {
    onGenderChange(e.target.value);
  };

  return (
    <div className={styles.circleCardHeader}>
      <div className={styles.circleNumbers}>
        <div className={styles.circleNumbersText}>Dream Circles</div>
        <div className={styles.circleNumbersOnly}>
          There are only {filteredCircles.length} dream circles available
        </div>
      </div>
      <div className={styles["selector-container"]}>
        <div className={styles["filter-by-language"]}>
          <label>Language</label>
          <select
            id="language"
            className={styles.selector}
            value={selectedLanguage}
            onChange={handleLanguageChange}
          >
            <option value="4">All Languages</option>
            <option value="0">English</option>
            <option value="1">Urdu</option>
            <option value="2">Indonesian</option>
            <option value="3">Uzbek</option>
          </select>
        </div>
        <div className={styles["filter-by-gender"]}>
          <label>Gender</label>
          <select
            id="gender"
            className={styles.selector}
            value={selectedGender}
            onChange={handleGenderChange}
          >
            <option value="2">Both</option>
            <option value="1">Sisters only</option>
          </select>
        </div>
      </div>
    </div>
  );
}

DreamCirclesCardHeader.propTypes = {
  selectedLanguage: PropTypes.number.isRequired,
  selectedGender: PropTypes.number.isRequired,
  filteredCircles: PropTypes.array.isRequired,
  onLanguageChange: PropTypes.func.isRequired,
  onGenderChange: PropTypes.func.isRequired,
};

export default DreamCirclesCardHeader;
