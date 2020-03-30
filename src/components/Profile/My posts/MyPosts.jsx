import React from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";


const MyPosts = (props) => {

    let postsElements = props.posts.map(post => <Post message={post.message} key={post.id} like={post.likesCount}/>);

    let newPostElement = React.createRef();

    let onAddPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    };

    return (
        <div className={classes.myPosts}>
            My post
            <div>
                <div>
                    <textarea
                        ref={newPostElement}
                        onChange={onPostChange}
                        placeholder={'Enter text'}
                        className={classes.textarea}
                        name="Post"
                        value={props.newPostText} id="" cols="30" rows="3"/>
                </div>
                <button onClick={onAddPost}>
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
