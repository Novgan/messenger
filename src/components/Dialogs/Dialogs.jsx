import React from "react";
import classes from './Dialogs.module.css';
import Dialog_items from "./DialogItem/DialogItem";
import Message from "./Messages/Message";


const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(d => <Dialog_items name={d.name} id={d.id}/>);
    let messagesElement = props.state.messages.map(message => <Message content={message.message}/>);

    let textAreaElement = React.createRef();

    let sendMessage = () => {
        let text = textAreaElement.current.value;
        alert(text);
    };


    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElement}
            </div>
            <div>
                    <textarea ref={textAreaElement} cols="30" rows="3">

                    </textarea>
            </div>
            <div>
                <button onClick={sendMessage}>
                    Send
                </button>
            </div>
        </div>
    )
}

export default Dialogs;
