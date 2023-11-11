import PropTypes from "prop-types";
import styles from "./AdminRequest.module.css";

function AdminRequest({ request, serialNumber }) {
  const { request_type } = request;

  const getRequestTypeText = (type) => {
    switch (type) {
      case 0:
        return "Mentor Approval";
      case 1:
        return "Circle Creation";
      case 2:
        return "File Upload Approval";
      case 3:
        return "Recording Link";
      default:
        return "Unknown Request Type";
    }
  };

  return (
    <div className={styles.requestContainer}>
      <div className={styles.circle}>{serialNumber}</div>
      <div className={styles.text}>{getRequestTypeText(request_type)}</div>
      <button className={styles.viewButton}>View</button>
    </div>
  );
}

// Prop validation using PropTypes
AdminRequest.propTypes = {
  request: PropTypes.shape({
    request_type: PropTypes.number.isRequired,
  }).isRequired,
  serialNumber: PropTypes.number.isRequired,
};

export default AdminRequest;
