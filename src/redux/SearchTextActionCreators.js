export const actionTypes = {
    UPDATE_SEARCH_TEXT:  'UPDATE_SEARCH_TEXT',
    CLEAR_SEARCH_TEXT:   'CLEAR_SEARCH_TEXT',
};

export const updateSearchText = (searchText) => ({
    type: actionTypes.UPDATE_SEARCH_TEXT,
    searchText,
});

export const clearSearchText = () => ({
    type: actionTypes.CLEAR_SEARCH_TEXT
});
