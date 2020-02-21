import { combineReducers } from "redux";
import cartReducer from "./Cart";
import resultsReducer from "./Results";

const rootReducer = combineReducers({
    cartReducer,
    resultsReducer,
});

export default rootReducer;
