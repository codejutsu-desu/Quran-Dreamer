import { useEffect, useState } from "react";
import axios from "axios";
import AdminRequest from "./AdminRequest";

function AdminRequests() {
  // Fetch the token from the auth reducer

  const [requests, setRequests] = useState([]);

  const token = localStorage.getItem("token");

  useEffect(() => {
    axios
      .get("http://13.126.8.147/api/quran_dreamers/admin_requests/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
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
