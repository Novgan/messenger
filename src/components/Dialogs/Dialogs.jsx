import React from "react";
import classes from './Dialogs.module.css';
import Dialog_items from "./DialogItem/DialogItem";
import Message from "./Messages/Message";


const Dialogs = (props) => {
    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <Dialog_items name={d.name} id={d.id}/>);
    let messagesElement = state.messages.map(m => <Message content={m.message}/>);

    let sendMessage = () => {
        props.sendMessage();
    };

    let newMessageText = (e) => {
        let newText = e.target.value;
        props.messageText(newText);
    };

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                <div>{messagesElement}</div>
                <div>
                    <div>
                    <textarea placeholder={'Enter your message'}
                              onChange={newMessageText}
                              value={state.newMessageText}
                              cols="30" rows="3"/>
                    </div>
                    <div>
                        <button onClick={sendMessage}>
                            Send
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;
