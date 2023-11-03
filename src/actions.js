import axios from "axios";

export const FETCH_STUDY_CIRCLES = "FETCH_STUDY_CIRCLES";

export const fetchStudyCircles = (token) => async (dispatch) => {
  try {
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const response = await axios.get(
      "http://13.126.8.147/api/quran_dreamers/study_circles/",
      {
        headers: headers,
      }
    );
    dispatch({ type: FETCH_STUDY_CIRCLES, data: response.data });
  } catch (error) {
    console.error("Error fetching study circles:", error);
  }
};
