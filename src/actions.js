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

export const FETCH_CIRCLE_DATA = "FETCH_CIRCLE_DATA";

export const fetchCircleData = (token, circleId) => async (dispatch) => {
  try {
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const response = await axios.get(
      `http://13.126.8.147/api/quran_dreamers/study_circle/${circleId}`,
      {
        headers: headers,
      }
    );
    dispatch({ type: FETCH_CIRCLE_DATA, data: response.data });
  } catch (error) {
    console.error("Error fetching circle data:", error);
  }
};

export const FETCH_CLASS_RECORDINGS = "FETCH_CLASS_RECORDINGS";

export const fetchClassRecordings = (token, circleId) => async (dispatch) => {
  try {
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const response = await axios.get(
      `http://13.126.8.147/api/quran_dreamers/class_recordings/study_circle/${circleId}`,
      {
        headers: headers,
      }
    );
    dispatch({ type: FETCH_CLASS_RECORDINGS, data: response.data });
  } catch (error) {
    console.error("Error fetching class recordings:", error);
  }
};

//Joined circle

// Define action types
export const FETCH_JOINED_CIRCLE = "FETCH_JOINED_CIRCLE"; // Rename the action type

// Action creator for fetching joined circles
export const fetchJoinedCircle = (token) => async (dispatch) => {
  try {
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    // Make the GET request to your API endpoint
    const response = await axios.get(
      "http://13.126.8.147/api/quran_dreamers/study_circles_joined",
      {
        headers,
      }
    );

    // Dispatch the fetched data
    dispatch({ type: FETCH_JOINED_CIRCLE, data: response.data }); // Update the action type
  } catch (error) {
    console.error("Error fetching joined circles:", error);
  }
};

// Define action types
export const FETCH_CREATED_CIRCLE = "FETCH_CREATED_CIRCLE"; // Rename the action type

// Action creator for fetching created circles
export const fetchCreatedCircle = (token) => async (dispatch) => {
  try {
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    // Make the GET request to your API endpoint
    const response = await axios.get(
      "http://13.126.8.147/api/quran_dreamers/study_circles_created",
      {
        headers,
      }
    );

    // Dispatch the fetched data
    dispatch({ type: FETCH_CREATED_CIRCLE, data: response.data }); // Update the action type
  } catch (error) {
    console.error("Error fetching created circles:", error);
  }
};
