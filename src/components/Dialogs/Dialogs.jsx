import React from "react";
import classes from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialog_items = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={classes.dialog}>
            <NavLink to={path}>
                {props.name}
            </NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={classes.message}>{props.content}</div>
    )
}

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs_items}>
                <Dialog_items name='Oleg' id="1"/>
                <Dialog_items name='Maria' id="2"/>
                <Dialog_items name='Slava' id="3"/>
            </div>
            <div className={classes.messages}>
                <Message content="Hi"/>
                <Message content="How are you"/>
                <Message content="Pls stop error"/>
            </div>
        </div>
    )
}

export default Dialogs;
