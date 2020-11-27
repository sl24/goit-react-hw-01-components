import React from 'react'

import Stats from './Stats'

// import s from './profileStyles.css'

const Profile = ({ name, tag, location, avatar, stats}) => {
    return (
        <div class="profile">
            <div class="description">
                <img
                src={avatar}
                alt="Аватар пользователя"
                 class="avatar"
                />
                <p class="name">{name}</p>
                <p class="tag">@{tag}</p>
                <p class="location">{location}</p>
            </div>
            <Stats {...stats}/>
        </div>)
}

export default Profile
