import axios from "axios";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

function MentorRequest({ mentor, object_pk, id }) {
  const navigate = useNavigate();
  const handleAccept = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(
        `https://fmr4zl8hr6.execute-api.ap-south-1.amazonaws.com/v1/reply_request/admin_request/${id}?action=accept&type=0&object_pk=${object_pk}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
        navigate("/adminDashboardLayout/requests"),
      );

      // Handle the response as needed
      console.log("Response:", response.data);
    } catch (error) {
      // Handle errors
      console.error("Error:", error);
    }
  };
  const handleReject = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(
        `https://fmr4zl8hr6.execute-api.ap-south-1.amazonaws.com/v1/reply_request/admin_request/${id}?action=reject&type=0&object_pk=${object_pk}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
        navigate("/adminDashboardLayout/requests"),
      );

      // Handle the response as needed
      console.log("Response:", response.data);
    } catch (error) {
      // Handle errors
      console.error("Error:", error);
    }
  };

  return (
    <div className=" border-2 border-solid border-theme p-5 ">
      <Toaster />

      <div className=" flex-col place-content-center space-y-4">
        <h2>Mentor Profile</h2>
        <ul className="flex-col space-y-2 ">
          <li>
            <strong>About Me:</strong> {mentor.about_me}
          </li>
          <li>
            <strong>Email:</strong> {mentor.email}
          </li>
          <li>
            <strong>First Name:</strong> {mentor.first_name}
          </li>
          <li>
            <strong>Last Name:</strong> {mentor.last_name}
          </li>
        </ul>
        <button
          onClick={handleAccept}
          className="rounded border border-theme bg-transparent px-4 py-2 font-semibold text-black hover:border-transparent hover:bg-theme hover:text-white"
        >
          Accept
        </button>
        <button
          onClick={handleReject}
          className="ml-3 rounded border border-theme bg-transparent px-4 py-2
          font-semibold text-black hover:border-transparent hover:bg-theme
          hover:text-white"
        >
          Reject
        </button>
      </div>
    </div>
  );
}

export default MentorRequest;

MentorRequest.propTypes = {
  mentor: PropTypes.object.isRequired,
  object_pk: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
};
