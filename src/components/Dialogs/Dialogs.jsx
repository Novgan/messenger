import React from "react";
import classes from './Dialogs.module.css';
import Dialog_items from "./DialogItem/DialogItem";
import Message from "./Messages/Message";


const Dialogs = (props) => {

    let dialogs = [
        {id: 1, name: 'Oleg'},
        {id: 2, name: 'Maria'},
        {id: 3, name: 'Slava'}
    ];

    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you'},
        {id: 3, message: 'Pls stop error'}
    ];

    let dialogsElements = dialogs.map(d => <Dialog_items name={d.name} id={d.id}/>);
    let messagesElement = messages.map(message => <Message content={message.message}/>);

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElement}
            </div>
        </div>
    )
}

export default Dialogs;
