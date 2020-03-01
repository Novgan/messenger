import React from "react";
import classes from './DialogItem.module.css';
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

export default Dialog_items;
