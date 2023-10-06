import NavbarMentor from "../NavbarMentor";
import StudentsSidebar from "../StudentsSidebar";
import styles from "./AdminProfile.module.css";
function AdminProfile() {
  return (
    <div className={styles.adminProfileContainer}>
      <StudentsSidebar />
      <div>
        <NavbarMentor />
      </div>
    </div>
  );
}

export default AdminProfile;
