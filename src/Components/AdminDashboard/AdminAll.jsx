import { useEffect, useState } from "react";
import axios from "axios";

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
    <table className="mx-2 w-full overflow-x-scroll text-left text-xs text-black rtl:text-right md:text-lg xl:text-xl">
      <thead className="bg-white text-xs uppercase text-black md:text-lg xl:text-xl">
        <tr className="text-xs md:text-lg xl:text-xl">
          {/* <th scope="col" className="px-6 py-3">
              Sr
            </th> */}
          <th scope="col" className="">
            Name
          </th>
          <th scope="col" className="">
            Email
          </th>
          <th scope="col" className="">
            Email Verified
          </th>
        </tr>
      </thead>
      <tbody>
        {adminData.map((row) => (
          <tr key={row.sr} className="border-b bg-white">
            {/* <td className="px-6 py-4 text-xs">{row.sr}</td> */}
            <td className=" py-4 text-xs md:text-lg xl:text-xl">
              {row.first_name} {row.last_name}
            </td>
            <td className="text-wrap py-4 text-xs  md:text-lg xl:text-xl">
              {row.email}
            </td>
            <td className="py-4 text-xs md:text-lg xl:text-xl">
              {row.isEmailVerified ? "Yes" : "No"}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default AdminAll;
