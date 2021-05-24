import React from 'react';
import s from './Profile.module.css';

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
            <div>
                My posts
                <div>
                    New post
                </div>
                <div className= {s.posts}>
                    <div className= {s.item}>
                        post1
                    </div>
                    <div className= 'item'>
                        post2
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;