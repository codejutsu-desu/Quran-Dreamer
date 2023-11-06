import { Outlet } from "react-router-dom";
import NavbarGeneral from "../NavbarGeneral";
import SidebarGeneral from "../SidebarGeneral";
import styles from "./AppLayoutMentor.module.css";
import { useNavigate } from "react-router-dom";

function AppLayoutMentor() {
  const navigate = useNavigate();
  return (
    <div className={styles.dreamCirclesContainer}>
      <SidebarGeneral />
      <div className={styles.mainContainer}>
        <NavbarGeneral />
        <div className={styles.circleInfoHeader}>
          Mentor{" "}
          <button
            className={styles.backButtonStyle}
            onClick={() => navigate(-1)}
          >
            Back
          </button>
        </div>
        <Outlet />
      </div>
    </div>
  );
}

export default AppLayoutMentor;
