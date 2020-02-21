import { createSelector } from 'reselect';

export const resultsSelector = state => state.results;

export const results = createSelector(
    [ resultsSelector ],
    results => results
);
