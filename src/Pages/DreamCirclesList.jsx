import DreamCircleCards from "../Components/DreamCircleCards";
// import DreamCircleCard from "../Components/DreamCircleCard";
import DreamCirclesCardHeader from "../Components/DreamCirclesCardHeader";
import NavbarMentor from "../Components/NavbarMentor";
import StudentsSidebar from "../Components/StudentsSidebar";
import styles from "./DreamCirclesList.module.css";

function DreamCirclesList() {
  return (
    <div className={styles.dreamCirclesContainer}>
      <StudentsSidebar />
      <div className={styles.mainContainer}>
        <NavbarMentor />
        <DreamCirclesCardHeader />
        <DreamCircleCards />
      </div>
    </div>
  );
}

export default DreamCirclesList;
