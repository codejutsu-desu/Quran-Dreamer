import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk"; // For handling async actions
import rootReducer from "./reducers"; // Your reducer

// Create the Redux store with the rootReducer and apply the thunk middleware
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store; // Export the Redux store
