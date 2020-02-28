import React from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={classes.myPosts}>
            My post
            <div>
                <div>
                    <textarea className={classes.textarea} name="Post" id="" cols="30" rows="3"></textarea>
                </div>
                <button>
                    Add post
                </button>
            </div>
            <div className={classes.posts}>
                <div className={classes.post}>
                    <Post message='Hi, how are you?' like='251'/>
                    <Post message="It's my first post." like='214'/>
                </div>
            </div>
        </div>
    );
}

export default MyPosts;
