import React from "react";
import {messageTextActionCreator, sendMessageActionCreator} from '../../Redux/dialogs-reducer';
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import WithAuthRedirect from "../../HOC/WithAuthRedirect";


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        messageText: (newText) => {
            dispatch(messageTextActionCreator(newText));
        },
        sendMessage: () => {
            dispatch(sendMessageActionCreator());
        }
    }
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(WithAuthRedirect(Dialogs));

export default DialogsContainer;
