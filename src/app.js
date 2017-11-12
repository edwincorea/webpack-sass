// React
import React from "react";
import {render} from "react-dom";
import {Provider} from "react-redux";

import BookList from "./containers/bookList";

import {createStore, applyMiddleware, compose} from "redux";
import logger from "redux-logger";

import reducers from "./reducers";

const middleware = applyMiddleware(logger);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducers, 
    composeEnhancers(middleware)
);

render(
    <Provider store={store}>
        <BookList />
    </ Provider>, document.getElementById("app")
);