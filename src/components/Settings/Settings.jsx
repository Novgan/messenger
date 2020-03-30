import React from "react";
import classes from "./Settings.module.css"
import {changeThemeActionCreator} from "../../Redux/setting-reducer";

const Setting = () => {

    let changeTheme = (e) => {
        changeThemeActionCreator();
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
