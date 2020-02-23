import { createSelector } from 'reselect';

export const resultsSelector = state => state.resultsReducer;

export const useResults = createSelector(
    [ resultsSelector ],
    results => results
);
