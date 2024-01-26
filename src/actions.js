import axios from "axios";

export const FETCH_STUDY_CIRCLES = "FETCH_STUDY_CIRCLES";

export const fetchStudyCircles = (token) => async (dispatch) => {
  try {
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const response = await axios.get(
      "https://fmr4zl8hr6.execute-api.ap-south-1.amazonaws.com/v1/study_circles/",
      {
        headers: headers,
      },
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
      `https://fmr4zl8hr6.execute-api.ap-south-1.amazonaws.com/v1/study_circle/${circleId}`,
      {
        headers: headers,
      },
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
      `https://fmr4zl8hr6.execute-api.ap-south-1.amazonaws.com/v1/class_recordings/study_circle/${circleId}`,
      {
        headers: headers,
      },
    );
    dispatch({ type: FETCH_CLASS_RECORDINGS, data: response.data });
  } catch (error) {
    console.error("Error fetching class recordings:", error);
  }
};

// Define action types
export const FETCH_JOINED_CIRCLE = "FETCH_JOINED_CIRCLE"; // Rename the action type

export const fetchJoinedCircle = (token) => async (dispatch) => {
  try {
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    // Make the GET request to your API endpoint
    const response = await axios.get(
      "https://fmr4zl8hr6.execute-api.ap-south-1.amazonaws.com/v1/study_circles_joined",
      {
        headers,
      },
    );

    // Dispatch the fetched data
    dispatch({ type: FETCH_JOINED_CIRCLE, data: response.data }); // Update the action type
  } catch (error) {
    console.error("Error fetching joined circles:", error);
  }
};

// AUTH

// Define action types
export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

// Action creator for login request
export const loginRequest = () => ({
  type: LOGIN_REQUEST,
});

// Action creator for successful login
export const loginSuccess = (data) => ({
  type: LOGIN_SUCCESS,
  payload: data,
});

// Action creator for login failure
export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
});

// Thunk Action Creator for Logging In
export const loginUser = (credentials) => async (dispatch) => {
  try {
    dispatch(loginRequest());

    const response = await axios.post(
      "https://fmr4zl8hr6.execute-api.ap-south-1.amazonaws.com/v1/login/",
      credentials,
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    console.log("Login response:", response);

    if (response.status === 201) {
      const data = response.data;

      // Set the user data to local storage
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", data.name);
      localStorage.setItem("user_type", data.user_type);

      dispatch(loginSuccess(data));
      console.log("User data:", data);
    } else {
      console.error(
        "Login failed. Server response:",
        response.status,
        response.data,
      );
      const errorData = response.data;
      dispatch(loginFailure(errorData));
    }
  } catch (error) {
    console.error("Login error:", error);
    dispatch(loginFailure(error));
  }
};

// authActions.js for signup

export const signUpSuccess = (userData) => ({
  type: "SIGN_UP_SUCCESS",
  payload: userData,
});

export const signUpFailure = (error) => ({
  type: "SIGN_UP_FAILURE",
  payload: error,
});
