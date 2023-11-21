import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

function AdminRequest({ request, serialNumber }) {
  const { request_type, id } = request;
  const navigate = useNavigate();

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

  const handleClick = () => {
    // Use the Navigate function properly
    navigate(`/adminDashboardLayout/request/${id}`);
  };

  return (
    <div className=" ml-auto mr-auto flex w-3/4 justify-between rounded-lg border-2 border-solid border-theme p-2 ">
      <div className="">{serialNumber}</div>
      <div className="">{getRequestTypeText(request_type)}</div>
      <button
        onClick={handleClick}
        className="rounded border border-theme bg-transparent px-1 py-1 font-semibold text-black hover:border-transparent hover:bg-theme hover:text-white"
      >
        Know More
      </button>
    </div>
  );
}

// Prop validation using PropTypes
AdminRequest.propTypes = {
  request: PropTypes.shape({
    request_type: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired, // Move id validation inside the request shape
  }).isRequired,
  serialNumber: PropTypes.number.isRequired,
};

export default AdminRequest;
