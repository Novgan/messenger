import React from "react";
import {messageTextActionCreator, sendMessageActionCreator} from '../../Redux/dialogs-reducer';
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {

    let state = props.store.getState().dialogsPage;
    let sendMessage = () => {
        if (state.newMessageText === '') {
            alert('Enter message.')
        } else {
            props.store.dispatch(sendMessageActionCreator());
        }
    };

    let newMessageText = (newText) => {
        props.store.dispatch(messageTextActionCreator(newText));
    };

    return <Dialogs messageText={newMessageText} sendMessage={sendMessage} dialogsPage={state}/>
};

export default DialogsContainer;
