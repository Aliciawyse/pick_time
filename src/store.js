import { createStore, compose, applyMiddleware } from 'redux';

import thunk from "redux-thunk";
// imports index file from reducers 
import reducer from "./reducers";

const store = createStore(
    reducer,
    compose(
        applyMiddleware(thunk),
        // from the redux docs. ensures redux doesn't crash. starts redux dev tools
        typeof window === "object" &&
            typeof window.devToolsExtension !== "undefined"
            ? window.devToolsExtension()
            : f => f
    )
);

export default store;

