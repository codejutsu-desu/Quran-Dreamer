import { useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

// mentor - 0;
// circle-1
// file - 2;
// recording-3

function RequestDetail() {
  const token = useSelector((state) => state.auth.token);
  console.log(token);
  const { id } = useParams(); // Fix: Use parentheses to call useParams

  const fetchData = async (id) => {
    try {
      const response = await axios.get(
        `http://13.126.8.147/api/quran_dreamers/admin_request/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData(id);
  }, [id]); // Fix: Include id in the dependency array to re-run the effect when id changes

  return <div>Hello</div>;
}

export default RequestDetail;
