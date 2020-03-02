import React from "react";
import classes from './Friend.module.css'

const Friend = (props) => {
    return (
        <div>
            <div className={classes.item}>
            </div>
            <div>
                {props.name}
            </div>
        </div>
    );
}

export default Friend;
