import {actionTypes as actionsType} from "../redux/CartActionCreators";

const cartReducer = (state = {}, action) => {
    switch(action.type) {
        case actionsType.ADD_ITEM:
            return {
                ...state,
                [action.item.sku]: action.item,
            };
        case actionsType.REMOVE_ITEM: {
            const {
                [action.item.sku]: _removedItem,
                ...newState
            } = state;
            return newState;
        }
        case actionsType.CLEAR_CART:
            return {};
        default:
            return state;
    }
};

export default cartReducer;
