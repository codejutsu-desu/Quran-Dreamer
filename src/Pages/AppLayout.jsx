import Bottombar from "../Components/Bottombar";
import Topbar from "../Components/Topbar";
import styles from "./AppLayout.module.css";
import PropTypes from "prop-types";

function AppLayout({ children }) {
  return (
    <div className={styles.appLayout}>
      <Topbar />
      <main>{children}</main>
      <Bottombar />
    </div>
  );
}

export default AppLayout;

AppLayout.propTypes = {
  children: PropTypes.any.isRequired,
};
