import { createSelector } from 'reselect';

export const searchTextSelector = state => state.searchTextReducer;

export const useSearchText = createSelector(
    [ searchTextSelector ],
        searchText => searchText
);
