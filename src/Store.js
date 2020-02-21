import {applyMiddleware, compose, createStore} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import rootReducer from "./Reducers/RootReducer";
import actionQueueMiddleware from "./middleware/actionQueue";
import logger from "./middleware/logger";

const defaultMiddlewares = [
    actionQueueMiddleware,
    thunk,
];

const getCreateStoreWithMiddleware = (preDefaultMiddlewares = [], postDefaultMiddlewares = []) => {
    const isDev = process.env.NODE_ENV === 'development';

    if (isDev) {
        defaultMiddlewares.push(logger);
    }

    const appliedMiddlewares = applyMiddleware(
        ...preDefaultMiddlewares,
        ...defaultMiddlewares,
        ...postDefaultMiddlewares
    );

    const composedAppliedMiddlewares = !isDev ? appliedMiddlewares : compose(
        appliedMiddlewares,
        composeWithDevTools()
    );

    return composedAppliedMiddlewares(createStore);
};

const configureStore = (preloadedState) => {
    const createStoreWithMiddleware = getCreateStoreWithMiddleware([]);
    const store = createStoreWithMiddleware(rootReducer, preloadedState);
    return store;
};

const store = configureStore();

export {store};
