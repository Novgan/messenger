import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import New from "./components/News/New";
import Music from "./components/Music/Music";
import Setting from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import Preloader from "./components/Common/Preloader/Preloader";
import {initializApp} from "./Redux/app-reducer";
import store from "./Redux/redux-store";

class App extends React.Component {

    componentDidMount() {
        this.props.initializApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
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
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializApp}))
(App);

let AppWrapper = (props) => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>

}

export default AppWrapper
