// reducers.js
import { combineReducers } from "redux";

// Initial state
const initialState = {
  studyCircles: [],
  circleData: {}, // Set circleData as an empty object
  classRecordings: [],
  joinedCircles: [],
  createdCircles: [],
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
  action
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

// Reducer for joinedCircles
const createdCirclesReducer = (state = initialState.createdCircles, action) => {
  switch (action.type) {
    case "FETCH_CREATED_CIRCLE": // Use the new action type
      return action.data;
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
  createdCircles: createdCirclesReducer,

  // Add more reducers here if needed
});

export default rootReducer;
