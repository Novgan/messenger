import React from "react";
import classes from './Profile.module.css'
import MyPosts from "./My posts/MyPosts";

const Profile = () => {
    return (
        <div className={classes.content}>
            <div>
                <img className={classes.background_img}
                    src="https://www.thewowstyle.com/wp-content/uploads/2015/01/nature-images.jpg"
                    alt="img"/>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts/>
        </div>
    );
}

export default Profile;
