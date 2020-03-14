import React from "react";
import classes from "./Settings.module.css"

const Setting = () => {

    let changeTheme = () => {
        alert('ok')
    };

    return (
        <div className={classes.setting}>
            <button className={classes.changeThemeButton}
            onClick={changeTheme}
            >
                Change theme
            </button>
        </div>
    )
}

export default Setting;
