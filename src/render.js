import React from "react"
import ReactDOM from "react-dom";
import App from "./App";
import {addPostUI, addPostBLL} from "./redux/state";

export let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <App state={state} addPostUI={addPostUI} addPostBLL={addPostBLL}/>,
        document.getElementById('root')
    );
}

