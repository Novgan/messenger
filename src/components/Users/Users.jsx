import React from "react";
import classes from "./Users.module.css";
import userPhoto from "../../assets/images/user.png"
import {NavLink} from "react-router-dom";


let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        <div className={classes.wrapper}>
            {pages.map((u, i) => {
                return <span key={i} className={props.currentPage === u ? classes.selectedPage : undefined}
                             onClick={e => {
                                 props.onPageChanged(u)
                             }}>{u}</span>
            })}
        </div>
        {props.users.map(u =>
            <div className={classes.userWrapper} key={u.id}>
            <span>
                <div>
                    <NavLink to={'/profile/' + u.id}>
                        <img className={classes.usersPhoto} src={u.photos.small !== null ? u.photos.small : userPhoto}
                             alt="avatar"/>
                    </NavLink>
                </div>
                <div>
                    {u.followed
                        ? <button className={classes.but} disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                            props.unfollow(u.id)
                        }}>Unfollow</button>
                        : <button className={classes.but} disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                            props.follow(u.id)
                        }}>Follow</button>}
                </div>
            </span>
                <span>
                <NavLink to={'/profile/' + u.id}>
                <div>{u.name}</div>
                    {u.status === null
                        ? null
                        : <div>{u.status}</div>}
                </NavLink>
            </span>
            </div>
        )}
    </div>
};

export default Users;
