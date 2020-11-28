import PropTypes from 'prop-types';

import Stats from './Stats';

import defaultImage from '../../img/defaultImage.jpg';

import s from './ProfileStyles.module.css';

const Profile = ({ name, tag, location, avatar = defaultImage, stats }) => {
  return (
    <div className={s.profile}>
      <div className={s.description}>
        <img
          src={avatar ?? defaultImage}
          alt="Аватар пользователя"
          className={s.avatar}
        />
        <p className={s.name}>{name}</p>
        <p className={s.tag}>@{tag}</p>
        <p className={s.location}>{location}</p>
      </div>
      <Stats {...stats} />
    </div>
  );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};

export default Profile;
