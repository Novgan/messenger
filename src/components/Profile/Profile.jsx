import React from "react";
import classes from './Profile.module.css'
import MyPosts from "./My posts/MyPosts";

const Profile = () => {
    return (
        <div className={classes.allContent}>
            <div>
                <img className={classes.background_img}
                     src="https://lh3.googleusercontent.com/proxy/m4C2SxSuvQhN85s03k21iYVaUDqEzVLeOISJ8W3nPPZ7WzaFG3tYLboNfg76VT5jgRbN5IMovJZpL-wQOO0D3YdbaAGXsCpbRPGRW5gcnqiuDMfUXgQcU0BMjk9_Wq5MYw"
                     alt="img"/>
            </div>
            <div className={classes.content}>
                <div>
                    <div>
                        <img src="https://steamuserimages-a.akamaihd.net/ugc/933814008884044805/E20A0BE3AD9EAB275000E54443E4EAC01B85BB4A/" alt=""/>
                    </div>
                    <div>
                        I`am wolf
                    </div>
                </div>
                <MyPosts/>
            </div>
        </div>
    );
}

export default Profile;
