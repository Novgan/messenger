import React from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {

    let post = [
        {id: 1, message: 'Hi, how are you?', likesCount: 251},
        {id: 2, message: 'It\'s my first post.', likesCount: 214}
    ];

    let postsElements = post.map(post => <Post message={post.message} like={post.likesCount}/>);

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
                    {postsElements}
                </div>
            </div>
        </div>
    );
}

export default MyPosts;
