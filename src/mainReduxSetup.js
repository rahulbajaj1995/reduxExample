import React, { Component } from 'react';
import { createStore } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from "./redux/rootReducer";
import Router from './router';

const enhancers = []
const createAppropriateStore = createStore
const store = createAppropriateStore(reducer, composeWithDevTools(...enhancers))

class mainReduxSetup extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router />
            </Provider>
        )
    }
}
export default mainReduxSetup