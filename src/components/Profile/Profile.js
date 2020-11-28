import PropTypes from 'prop-types';

import Stats from './Stats';

import defaultImage from '../../img/defaultImage.jpg';

// import s from './profileStyles.css'

const Profile = ({ name, tag, location, avatar = defaultImage, stats}) => {
    return (
        <div class="profile">
            <div class="description">
                <img
                src={avatar ?? defaultImage}
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

Profile.propTypes = {
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes:PropTypes.number.isRequired,
    }),
}

export default Profile
