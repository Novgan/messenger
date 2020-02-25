import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
    return (
        <div className="App">
            <Header/>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JS</li>
            </ul>
        </div>
    );
}

const Header = () => {
    return (
        <div>
            <a href="https://google.com/">
                Google
            </a>
            <br/>
            <a href="https://yandex.ua/">
                Yandex
            </a>
            <br/>
            <a href="#q">
                None
            </a>
        </div>
    );
}

export default App;
