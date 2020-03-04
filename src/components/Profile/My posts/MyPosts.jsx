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
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.postText(text);
    };

    let preСleaning = () => {
        props.postText('');
    };

    return (
        <div className={classes.myPosts}>
            My post
            <div>
                <div>
                    <textarea
                        ref={newPostElement}
                        onClick={preСleaning}
                        onChange={onPostChange}
                        className={classes.textarea}
                        name="Post"
                        value={props.newPostText} id="" cols="30" rows="3"/>
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
