export const actionTypes = {
    ADD_ITEM:      'ADD_ITEM',
    REMOVE_ITEM:   'REMOVE_ITEM',
    CLEAR_CART:    'CLEAR_CART',
};

export const add = (item) => ({
    type: actionTypes.ADD_ITEM,
    item,
});

export const remove = (item) => ({
    type: actionTypes.REMOVE_ITEM,
    item,
});

export const clear = () => ({
    type: actionTypes.CLEAR_CART
});
