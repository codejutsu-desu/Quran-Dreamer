import EventInfo from "../Components/EventInfo";
import AppLayout from "./AppLayout";
import styles from "./Events.module.css";
function Events() {
  return (
    <AppLayout>
      <div className={styles.eventBg}>
        <img className={styles.mashjid} src="/eventMashjid.jpg" alt="" />

        <div className={styles.eventTitle}>Upcoming Events</div>

        <EventInfo />
        <EventInfo />
      </div>
    </AppLayout>
  );
}

export default Events;
