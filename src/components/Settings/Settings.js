import React from "react";
import classes from "./Settings.module.css"

const Setting = () => {
    return (
        <div className={classes.setting}>
            <button className={classes.changeThemeButton}>
                Change theme
            </button>
        </div>
    )
}

export default Setting;
