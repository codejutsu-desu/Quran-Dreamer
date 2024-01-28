import { useEffect, useState } from "react";
import axios from "axios";
import AdminRequest from "./AdminRequest";

function AdminRequests() {
  const [requests, setRequests] = useState([]);

  const token = localStorage.getItem("token");

  useEffect(() => {
    axios
      .get(
        "https://fmr4zl8hr6.execute-api.ap-south-1.amazonaws.com/v1/admin_requests/",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
      .then((response) => {
        setRequests(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [token]); // Include token as a dependency to re-run the effect when the token changes

  return (
    <div className="flex flex-col space-y-2">
      {requests.map((request, index) => (
        <AdminRequest key={index} request={request} serialNumber={index + 1} />
      ))}
    </div>
  );
}

export default AdminRequests;
