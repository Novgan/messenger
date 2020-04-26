import React from "react";
import loader from '../../../assets/images/loader.svg'
import classes from "./Preloader-module.css"

const Preloader = () => {

    return (
        <div className={classes.loader}>
            <img src={loader} alt="loader"/>
        </div>
    )
};

export default Preloader;
