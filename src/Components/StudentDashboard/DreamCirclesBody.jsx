import DreamCircleCards from "../DreamCircleCards";
import DreamCirclesCardHeader from "../DreamCirclesCardHeader";
import styles from "./DreamCirclesBody.module.css";
function DreamCirclesBody() {
  return (
    <div style={styles.circlesBodyContainer}>
      <DreamCirclesCardHeader />
      <DreamCircleCards />
    </div>
  );
}

export default DreamCirclesBody;
