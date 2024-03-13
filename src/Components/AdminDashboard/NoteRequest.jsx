import axios from "axios";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

function NoteRequest({ note, object_pk, id }) {
  const { file, uploaded_by_name } = note;
  const navigate = useNavigate();

  const handleAccept = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(
        `https://fmr4zl8hr6.execute-api.ap-south-1.amazonaws.com/v1/reply_request/admin_request/${id}?action=accept&type=2&object_pk=${object_pk}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      toast.success("Accepted");
      console.log("Response:", response.data);
      navigate("/adminDashboardLayout/requests");
    } catch (error) {
      toast.error("error occured");
      console.error("Error:", error);
    }
  };
  const handleReject = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(
        `https://fmr4zl8hr6.execute-api.ap-south-1.amazonaws.com/v1/reply_request/admin_request/${id}?action=reject&type=2&object_pk=${object_pk}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
        navigate("/adminDashboardLayout/requests"),
      );
      toast.success("rejected");

      console.log("Response:", response.data);
    } catch (error) {
      toast.error("error occured");
    }
  };

  return (
    <div className="m-auto mt-2 flex max-w-sm flex-col gap-3 rounded-lg border border-theme bg-white p-6 text-sm shadow md:text-lg">
      <Toaster />

      <a className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
        {" "}
        Uploader-{uploaded_by_name}
      </a>
      <div className="flex justify-between gap-2">
        <a
          href={file}
          className="inline-flex items-center font-medium text-blue-600 hover:underline"
        >
          Download the pdf
          <svg
            className="ms-2.5 h-3 w-3 rtl:rotate-[270deg]"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 18"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
            />
          </svg>
        </a>
        {/* <a
          href={file}
          target="_blank"
          class="inline-flex items-center font-medium text-blue-600 hover:underline"
        >
          View the pdf
          <svg
            class="ms-2.5 h-3 w-3 rtl:rotate-[270deg]"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 18"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
            />
          </svg>
        </a> */}
      </div>
      <div className="flex justify-between ">
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

export default NoteRequest;

NoteRequest.propTypes = {
  note: PropTypes.object.isRequired,
  object_pk: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};
