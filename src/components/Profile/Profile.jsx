import React from "react";
import classes from './Profile.module.css'
import MyPosts from "./My posts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Post from "./My posts/Post/Post";


const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                posts={props.state.posts}
                newPostText={props.newPostText}
                addPost={props.addPost}
                postText={props.postText}
            />
        </div>
    );
}

export default Profile;
