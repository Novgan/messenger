import React from "react";
import {addPostActionCreator, postTextActionCreator} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
    let state = props.store.getState();

    let addPost = (text) => {
        if (text === '') {
            alert("Nothing to post");
        } else {
            props.store.dispatch(addPostActionCreator());
        }
    };

    let onPostChange = (text) => {
        props.store.dispatch(postTextActionCreator(text));
    };

    return (<MyPosts updateNewPostText={onPostChange}
                     addPost={addPost}
                     posts={state.profilePage.posts}
                     newPostText={state.profilePage.newPostText}
    />);
};

export default MyPostsContainer;
