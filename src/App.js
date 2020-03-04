import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import New from "./components/News/New";
import Music from "./components/Music/Music";
import Setting from "./components/Settings/Settings";
import {Route} from "react-router-dom";

const App = (props) => {
    return (
            <div className={'app-wrapper'}>
                <Header/>
                <Navbar/>
                <div className={'app-wrapper-content'}>
                    <Route path='/profile' render={() => <Profile state={props.state.profilePage} addPost={props.addPost}/>}/>
                    <Route exact path='/dialogs'
                           render={() => <Dialogs state={props.state.dialogsPage}/>}/>
                    <Route path='/news' render={() => <New/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/setting' render={() => <Setting/>}/>
                </div>
            </div>
    );
}


export default App;
