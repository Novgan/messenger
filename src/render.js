import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {addPost, postText} from "./Redux/state";

export let rerenderEntireTree = (state) => {
    ReactDOM.render(<BrowserRouter>
        <App state={state} addPost={addPost} postText={postText}/>
    </BrowserRouter>, document.getElementById('root'));
};
