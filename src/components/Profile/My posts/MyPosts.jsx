import React from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsElements = props.posts.map(post => <Post message={post.message} like={post.likesCount}/>);

    let newPostElement = React.createRef();
    let addPost = () => {
        let text = newPostElement.current.value;
        if (text === '') {
            alert("Nothing to post");
        }
        props.addPost(text);
        newPostElement.current.value = '';
    };

    return (
        <div className={classes.myPosts}>
            My post
            <div>
                <div>
                    <textarea ref={newPostElement} className={classes.textarea} name="Post" id="" cols="30" rows="3">

                    </textarea>
                </div>
                <button onClick={addPost}>
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
