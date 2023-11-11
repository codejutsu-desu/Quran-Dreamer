import { useEffect, useState } from "react";
import axios from "axios";
import AdminRequest from "./AdminRequest";
import { useSelector } from "react-redux";

function AdminRequests() {
  const [requests, setRequests] = useState([]);
  const token = useSelector((state) => state.auth.token);
  console.log(token);

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
  }, [token]);

  return (
    <div>
      {requests.map((request, index) => (
        <AdminRequest key={index} request={request} serialNumber={index + 1} />
      ))}
    </div>
  );
}

export default AdminRequests;
