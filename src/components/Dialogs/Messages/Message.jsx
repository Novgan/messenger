import React from "react";
import classes from './Message.module.css';

const Message = (props) => {
    return (
        <div className={classes.message}>{props.content}</div>
    )
}


export default Message;
