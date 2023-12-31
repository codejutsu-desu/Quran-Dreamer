import Bottombar from "../Components/Bottombar";
import Topbar from "../Components/Topbar";
import PropTypes from "prop-types";

function AppLayout({ children }) {
  return (
    <div className="h-screen flex-col justify-between">
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
