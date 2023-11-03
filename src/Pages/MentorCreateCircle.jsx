import StudyCircleForm from "../Components/CreateCircle/CreateCircle";
import NavbarGeneral from "../Components/NavbarGeneral";
import SidebarGeneral from "../Components/SidebarGeneral";
import styles from "./MentorCreateCircle.module.css";
function MentorCreateCircle() {
  return (
    <div className={styles.dreamCirclesContainer}>
      <SidebarGeneral />
      <div className={styles.mainContainer}>
        <NavbarGeneral />
        <StudyCircleForm />
      </div>
    </div>
  );
}

export default MentorCreateCircle;
