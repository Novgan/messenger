import React from "react";
import classes from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={classes.background_img}
                     src="https://www.komandirovka.ru/upload/iblock/80c/80c900bf67ed148da7af4b0f1484b95b.jpg"
                     alt="img"/>
            </div>
            <div className={classes.description_Block}>
                <div>
                    <img src="https://steamuserimages-a.akamaihd.net/ugc/933814008884044805/E20A0BE3AD9EAB275000E54443E4EAC01B85BB4A/" alt="back"/>
                </div>
                <div>
                    I`am wolf
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;