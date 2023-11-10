import { useDispatch, useSelector } from "react-redux";
import { fetchCircleData } from "../../actions";
import styles from "./InsideCircle.module.css";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import LiveClasses from "./LiveClasses";

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

function InsideCircle() {
  const navigate = useNavigate();
  const { circleId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(fetchCircleData(token, circleId));
    }
  }, [dispatch, circleId]);

  const circleData = useSelector((state) => state.circleData);
  const categoryName = categoryNames[circleData.category];

  return (
    <>
      <div className={styles.rightBar}>
        <div className={styles.circleTitleNavbar}>
          <div className={styles.circleInfoHeader}>
            Dream Circle/ {categoryName}
          </div>
          <div className={styles.navBack}>
            <button
              className={styles.backButtonStyle}
              onClick={() => navigate(-1)}
            >
              Back
            </button>
          </div>
        </div>
        <LiveClasses circle={circleData} />
      </div>
    </>
  );
}

export default InsideCircle;
