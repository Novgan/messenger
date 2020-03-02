import React from "react";
import classes from './Friends.module.css'
import Friend from "./Friend/Friend";

const Friends = () => {
    return (
        <div className={classes.friends}>
            <Friend name={'Andy'}/>
            <Friend name={'Oleg'}/>
            <Friend name={'Maria'}/>
        </div>
    );
}

export default Friends;
