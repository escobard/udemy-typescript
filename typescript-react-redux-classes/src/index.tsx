import React from 'react';
import ReactDom from "react-dom/client";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { thunk } from 'redux-thunk';
import { App } from "./components/App";
import { reducers } from "./reducers";

const el = document.getElementById("root");

const root = ReactDom.createRoot(el!)

const store = createStore(reducers, applyMiddleware(thunk));

root.render(
    <Provider store={store}>
        <App />
    </Provider>
);