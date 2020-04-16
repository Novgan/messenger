import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import New from "./components/News/New";
import Music from "./components/Music/Music";
import Setting from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";

const App = (props) => {
    return (
        <div className={'app-wrapper'}>
            <HeaderContainer/>
            <Navbar/>
            <div className={'app-wrapper-content'}>
                <Route path='/profile/:userId?' render={() =>
                    <ProfileContainer/>}/>
                <Route path='/dialogs' render={() =>
                    <DialogsContainer/>}/>
                <Route path='/news' render={() => <New/>}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/setting' render={() => <Setting/>}/>
                <Route path='/login' render={() => <Login/>}/>
                <Route path='/users' render={() =>
                    <UsersContainer/>}/>
            </div>
        </div>
    );
};


export default App;
