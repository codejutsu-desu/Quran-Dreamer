// reducers.js
import { combineReducers } from "redux";
// import authReducer from "./authReducers";

// Initial state
const initialState = {
  studyCircles: [],
  circleData: {},
  classRecordings: [],
  joinedCircles: [],
  userData: null,
};

// Reducer for studyCircles
const studyCirclesReducer = (state = initialState.studyCircles, action) => {
  switch (action.type) {
    case "FETCH_STUDY_CIRCLES":
      return action.data;
    default:
      return state;
  }
};

// Reducer for circleData
const circleReducer = (state = initialState.circleData, action) => {
  switch (action.type) {
    case "FETCH_CIRCLE_DATA":
      return action.data;
    default:
      return state;
  }
};

//Reducer for class recording

const classRecordingsReducer = (
  state = initialState.classRecordings,
  action,
) => {
  switch (action.type) {
    case "FETCH_CLASS_RECORDINGS":
      return action.data;
    default:
      return state;
  }
};

// Reducer for joinedCircles
const joinedCirclesReducer = (state = initialState.joinedCircles, action) => {
  switch (action.type) {
    case "FETCH_JOINED_CIRCLE": // Use the new action type
      return action.data;
    default:
      return state;
  }
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SIGN_UP_SUCCESS":
      return {
        ...state,
        userData: action.payload,
        error: null,
      };
    case "SIGN_UP_FAILURE":
      return {
        ...state,
        userData: null,
        error: action.payload,
      };
    case "LOGIN_REQUEST":
      return {
        ...state,
        error: null,
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        userData: action.payload,
        error: null,
      };
    case "LOGIN_FAILURE":
      return {
        ...state,
        userData: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

// Combine reducers if you have multiple reducers
const rootReducer = combineReducers({
  studyCircles: studyCirclesReducer,
  circleData: circleReducer, // Use the correct property name
  classRecordings: classRecordingsReducer,
  joinedCircles: joinedCirclesReducer,
  // authentication: authReducer,
  auth: authReducer,

  // Add more reducers here if needed
});

export default rootReducer;
