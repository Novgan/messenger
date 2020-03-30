import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import New from "./components/News/New";
import Music from "./components/Music/Music";
import Setting from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = (props) => {
    return (
        <div className={'app-wrapper'}>
            <Header/>
            <Navbar/>
            <div className={'app-wrapper-content'}>
                <Route path='/profile' render={() =>
                    <Profile/>}/>
                <Route path='/dialogs' render={() =>
                    <DialogsContainer/>}/>
                <Route path='/news' render={() => <New/>}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/setting' render={() => <Setting/>}/>
                <Route path='/users' render={() =>
                    <UsersContainer/>}/>
            </div>
        </div>
    );
};


export default App;
