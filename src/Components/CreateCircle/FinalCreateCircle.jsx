import NavbarGeneral from "../NavbarGeneral";
import SidebarGeneral from "../SidebarGeneral";
import styles from "./FinalCreateCircle.module.css";
import OtherLinksCircle from "./OtherLinksCircle";
function FinalCreateCircle() {
  return (
    <div className={styles.dreamCirclesContainer}>
      <SidebarGeneral />
      <div className={styles.mainContainer}>
        <NavbarGeneral />
        <OtherLinksCircle />
      </div>
    </div>
  );
}

export default FinalCreateCircle;
