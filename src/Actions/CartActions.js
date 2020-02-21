import {add, clear, remove} from "../redux/CartActionCreators";

export const cartActions = {
    addItem: (item) => dispatch => {
        dispatch(add(item));
    },
    removeItem: (item) => dispatch => {
        dispatch(remove(item));
    },
    clear: () => dispatch => {
        dispatch(clear());
    }
};


