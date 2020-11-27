import React from 'react'

import Stats from './Stats'

// import s from './profileStyles.css'

const Profile = ({ name, tag, location, avatar, stats}) => {
    return (
        <div Name="profile">
            <div className="description">
                <img
                src={avatar}
                alt="Аватар пользователя"
                 className="avatar"
                />
                <p className="name">{name}</p>
                <p className="tag">@{tag}</p>
                <p className="location">{location}</p>
            </div>
            <Stats {...stats}/>
        </div>)
}

export default Profile
