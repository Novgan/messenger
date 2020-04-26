import React from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {requiredField, maxLengthCreator} from "../../../utils/validator/validators";
import {Textarea} from "../../Common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10)


const MyPosts = (props) => {

    let postsElements = props.posts.map(post => <Post message={post.message} key={post.id} like={post.likesCount}/>);

    let onAddPost = (values) => {
        props.addPost(values.post);
    };


    return (
        <div className={classes.myPosts}>
            My post
            <MyPostFormRedux onSubmit={onAddPost}/>
            <div className={classes.posts}>
                <div className={classes.post}>
                    {postsElements}
                </div>
            </div>
        </div>
    );
}

const MyPostForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field  validate={[requiredField, maxLength10]}
                component={Textarea}
                className={classes.textarea}
                placeholder={"Enter text"}
                name="post"
                cols="30" rows="3"/>
        </div>
        <button>
            Add post
        </button>
    </form>
}

const MyPostFormRedux = reduxForm({
    form: "myPostForm"
})(MyPostForm)


export default MyPosts;
