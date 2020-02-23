import {actionTypes} from "../redux/SearchTextActionCreators";

const initialState = '';

const searchTextReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.UPDATE_SEARCH_TEXT:
            return action.searchText;
        case actionTypes.CLEAR_SEARCH_TEXT:
            return '';
        default:
            return state;
    }
};

export default searchTextReducer;
