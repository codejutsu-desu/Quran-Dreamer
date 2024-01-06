import { useEffect, useState } from "react"; // Import useState
import axios from "axios";
import { useParams } from "react-router-dom";
import CircleRequest from "./CircleRequest";

function RequestDetail() {
  const token = localStorage.getItem("token");
  const { object_pk, id } = useParams();
  const [circleResponse, setCircleResponse] = useState(null); // Use useState to store circleResponse

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://fmr4zl8hr6.execute-api.ap-south-1.amazonaws.com/v1/admin_request/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      console.log("Response:", response.data);

      // Move the if statement outside of the axios.get block
      if (response.data.request_type === 1) {
        const circleResponse = await axios.get(
          `https://fmr4zl8hr6.execute-api.ap-south-1.amazonaws.com/v1/study_circle/${object_pk}`, // Use 'id' instead of 'response.data.request_type'
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );

        console.log("Circle Response:", circleResponse.data);
        setCircleResponse(circleResponse.data); // Update state with circleResponse
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  return (
    <div>
      {circleResponse && (
        <CircleRequest
          object_pk={object_pk}
          id={id}
          formData={circleResponse}
        />
      )}{" "}
    </div>
  );
}

export default RequestDetail;
