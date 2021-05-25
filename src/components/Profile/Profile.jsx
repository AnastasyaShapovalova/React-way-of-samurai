import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdVvEDkKjNI0i6ymK6zWKDCId_yfmnRV2Wafh6-_vQHJed1Zdopbj8YRzKnIRHjaUnseA&usqp=CAU"/>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts />
        </div>
    )
}

export default Profile;