import React from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsElements = props.posts.map(post => <Post message={post.message} like={post.likesCount}/>);

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
