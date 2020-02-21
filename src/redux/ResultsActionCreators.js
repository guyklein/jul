export const actionTypes = {
    UPDATE_RESULTS:  'UPDATE_RESULTS',
    CLEAR_RESULTS:   'CLEAR_RESULTS',
};

export const update = (results) => ({
    type: actionTypes.UPDATE_RESULTS,
    results,
});

export const clear = () => ({
    type: actionTypes.CLEAR_RESULTS
});
