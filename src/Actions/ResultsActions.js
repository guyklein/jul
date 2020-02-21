import {clear, update} from "../redux/ResultsActionCreators";

export const resultsActions = {
    updateResults: (results) => (dispatch, getState) => {
        dispatch(update(results))
    },
    clearResults: () => (dispatch, getState) =>
        dispatch(clear())
};
