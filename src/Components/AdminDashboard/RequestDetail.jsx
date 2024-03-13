import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import CircleRequest from "./CircleRequest";
import MentorRequest from "./MentorRequest";
import NoteRequest from "./NoteRequest";

function RequestDetail() {
  const token = localStorage.getItem("token");
  const { object_pk, id } = useParams();
  console.log(object_pk, id);
  const [circleResponse, setCircleResponse] = useState(null);
  const [mentorResponse, setMentorResponse] = useState(null);
  const [noteResponse, setNoteResponse] = useState(null);

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

      if (response.data.request_type === 1) {
        const circleResponse = await axios.get(
          `https://fmr4zl8hr6.execute-api.ap-south-1.amazonaws.com/v1/study_circle/${object_pk}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );

        console.log("Circle Response:", circleResponse.data);
        setCircleResponse(circleResponse.data);
      } else if (response.data.request_type === 2) {
        const noteResponse = await axios.get(
          `http://13.126.8.147/api/quran_dreamers/upload/${object_pk}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );

        console.log("Note Response:", noteResponse.data);
        setNoteResponse(noteResponse.data);
      } else if (response.data.request_type === 0) {
        const mentorResponse = await axios.get(
          `https://fmr4zl8hr6.execute-api.ap-south-1.amazonaws.com/v1/user/${object_pk}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );
        setMentorResponse(mentorResponse.data);
        console.log("Mentor Response:", mentorResponse.data);
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
      )}

      {mentorResponse && (
        <MentorRequest mentor={mentorResponse} object_pk={object_pk} id={id} />
      )}
      {noteResponse && (
        <NoteRequest note={noteResponse} object_pk={object_pk} id={id} />
      )}
    </div>
  );
}

export default RequestDetail;
