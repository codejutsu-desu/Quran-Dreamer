import { useState, useEffect } from "react";
import DreamCirclesCardHeader from "../DreamCirclesCardHeader";
import DreamCircleCards from "../DreamCircleCards";
import { useDispatch, useSelector } from "react-redux";
import { fetchJoinedCircle, fetchStudyCircles } from "../../actions";
import styles from "./DreamCirclesBody.module.css";

function DreamCirclesBody() {
  const dispatch = useDispatch();
  const circleData = useSelector((state) => state.studyCircles);
  const joinedCircles = useSelector((state) => state.joinedCircles);

  const [selectedLanguage, setSelectedLanguage] = useState(4);
  const [selectedGender, setSelectedGender] = useState(2);

  const handleLanguageChange = (language) => {
    setSelectedLanguage(Number(language));
  };

  const handleGenderChange = (gender) => {
    setSelectedGender(Number(gender));
  };

  // Define filteredCircles as a state variable
  const [filteredCircles, setFilteredCircles] = useState([]);

  useEffect(() => {
    // Calculate the filteredCircles
    const newFilteredCircles = circleData
      .filter((circle) => {
        if (selectedLanguage === 4) {
          return !joinedCircles.some(
            (joinedCircle) => joinedCircle.id === circle.id
          );
        } else {
          return (
            !joinedCircles.some(
              (joinedCircle) => joinedCircle.id === circle.id
            ) && circle.language === selectedLanguage
          );
        }
      })
      .filter((circle) => {
        if (selectedGender === 2) {
          return true;
        } else if (selectedGender === 0) {
          return circle.is_sister_only === false;
        } else if (selectedGender === 1) {
          return circle.is_sister_only === true;
        }
      });

    setFilteredCircles(newFilteredCircles);
  }, [circleData, joinedCircles, selectedLanguage, selectedGender]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(fetchStudyCircles(token));
      dispatch(fetchJoinedCircle(token));
    }
  }, [dispatch]);

  return (
    <div style={styles.circlesBodyContainer}>
      <DreamCirclesCardHeader
        selectedLanguage={selectedLanguage}
        selectedGender={selectedGender}
        onLanguageChange={handleLanguageChange}
        onGenderChange={handleGenderChange}
        filteredCircles={filteredCircles}
      />

      <DreamCircleCards filteredCircles={filteredCircles} />
    </div>
  );
}

export default DreamCirclesBody;
