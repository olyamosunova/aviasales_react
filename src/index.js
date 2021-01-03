import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import {createAPI} from "./api/api";
import {composeWithDevTools} from "redux-devtools-extension";
import App from './components/App/App';
import reducer from "./reducer/reducer";
import {Operations} from "./reducer/data/data";

const api = createAPI();

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    ));

store.dispatch(Operations.loadTickets());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector(`#root`)
);
