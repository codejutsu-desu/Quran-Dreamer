// auth.js

// Initial State
const initialState = {
  token: null,
  name: null,
  user_id: null,
  user_type: null,
  isAuthenticated: false,
  isLoading: false, // Added isLoading
  error: null, // Added error
};

// Action Types
const LOGIN_REQUEST = "LOGIN_REQUEST";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGIN_FAILURE = "LOGIN_FAILURE";

// Reducer
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true, // Set isLoading to true during request
        error: null,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        name: action.payload.name,
        user_id: action.payload.user_id,
        user_type: action.payload.user_type,
        isAuthenticated: true,
        isLoading: false, // Set isLoading to false after success
        error: null,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        token: null,
        name: null,
        user_id: null,
        user_type: null,
        isAuthenticated: false,
        isLoading: false, // Set isLoading to false after failure
        error: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;

// Action Creators
export const loginRequest = () => ({
  type: LOGIN_REQUEST,
});

export const loginSuccess = (data) => ({
  type: LOGIN_SUCCESS,
  payload: data,
});

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
});

// Thunk Action Creator for Logging In
export const loginUser = (credentials) => async (dispatch) => {
  try {
    // Dispatch a login request action
    dispatch(loginRequest());

    // Make your API call to login
    const response = await fetch(
      "http://13.126.8.147/api/quran_dreamers/login/",
      {
        method: "POST",
        body: JSON.stringify(credentials),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.ok) {
      const data = await response.json();
      dispatch(
        loginSuccess({
          token: data.token,
          name: data.name,
          user_id: data.user_id,
          user_type: data.user_type,
        })
      );
    } else {
      const errorData = await response.json();
      dispatch(loginFailure(errorData));
    }
  } catch (error) {
    dispatch(loginFailure(error.message));
  }
};
