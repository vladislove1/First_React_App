import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {store} from './redux/State'

function reRender() {
    ReactDOM.render(<App state = {store.getData()}
                         dispatch = {store.dispatch.bind(store)}
    />, document.getElementById('root'));
}

document.onmousedown = (e) => {
    e.preventDefault();
};
store.subscribe(reRender);
reRender();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
