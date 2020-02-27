import React from "react";
import classes from './Post.module.css'

const Post = (props) => {
    return (
        <div className={classes.item}>
            <img src="https://i.pinimg.com/originals/59/8d/0a/598d0a6c78beb07c20a04cb0c6784297.png" alt="avatar"/>
            {props.message}
            <div>
                    <span>
                        like {props.like}
                    </span>
            </div>
        </div>
    );
}

export default Post;
