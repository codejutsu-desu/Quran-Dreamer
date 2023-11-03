// reducers.js
import { combineReducers } from "redux";

// Initial state
const initialState = {
  studyCircles: [],
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

// Combine reducers if you have multiple reducers
const rootReducer = combineReducers({
  studyCircles: studyCirclesReducer,

  // Add more reducers here if needed
});

export default rootReducer;
