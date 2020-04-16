import React from "react";
import classes from './ProfileInfo.module.css'
import Preloader from "../../Common/Preloader/Preloader";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    let contacts = {...props.profile.contacts};

    return (
        <div className={classes.descriptionBlock}>
            <div className={classes.photoWrapper}>
                {props.profile.photos.large
                    ? <img src={props.profile.photos.large} alt="photos"/>
                    : <img src={require('../../../assets/images/user.png')} alt="photos"/>
                }
            </div>
            <div>
                <div className={classes.bold}>Full name:</div>
                <div className={classes.inline}>{props.profile.fullName}</div>
            </div>
            {props.profile.photos.large === null
                ? null
                : <div>
                    <div className={classes.bold}>About me:</div>
                    <div className={classes.inline}>{props.profile.aboutMe}</div>
                </div>
            }
            {Object.keys(contacts).map((u, i) => {
                if (contacts[u] === null) return null;
                return (<div key={i}>
                    <div className={classes.bold}>{u}:</div>
                    <div className={classes.inline}>{contacts[u]}</div>
                </div>)
            })}
        </div>
    );
}

export default ProfileInfo;
