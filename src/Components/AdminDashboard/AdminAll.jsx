import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./AdminAll.module.css";

function AdminAll() {
  const [adminData, setAdminData] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      // Handle the case when the token is not available
      console.error("Token not found in local storage.");
      return;
    }

    axios
      .get("http://13.126.8.147/api/quran_dreamers/admins_list", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        // Assuming the response data is an array of admins
        const admins = response.data;
        // Create a serial number for each admin
        const adminsWithSerial = admins.map((admin, index) => ({
          ...admin,
          sr: index + 1,
        }));
        // Update the state with the modified data
        setAdminData(adminsWithSerial);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [token]);

  return (
    <table className={styles.adminTable}>
      <thead>
        <tr>
          <th>Sr</th>
          <th>Name</th>
          <th>Email</th>
          <th>Email Verified</th>
        </tr>
      </thead>
      <tbody>
        {adminData.map((row) => (
          <tr key={row.sr}>
            <td>{row.sr}</td>
            <td>
              {row.first_name} {row.last_name}
            </td>
            <td>{row.email}</td>
            <td>{row.isEmailVerified ? "Yes" : "No"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default AdminAll;
