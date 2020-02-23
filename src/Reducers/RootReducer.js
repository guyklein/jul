import { combineReducers } from "redux";
import cartReducer from "./Cart";
import resultsReducer from "./Results";
import searchTextReducer from "./SearchText";

const rootReducer = combineReducers({
    cartReducer,
    resultsReducer,
    searchTextReducer,
});

export default rootReducer;
