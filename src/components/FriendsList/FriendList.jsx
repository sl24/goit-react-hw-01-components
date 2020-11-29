import FriendListItem from '../FirendsListItem/FriendListItem.jsx';

import PropTypes from 'prop-types';

import s from './FriendList.module.css';

const FriendList = ({ friends }) => {
  return <ul className={s.friendLlist}>{friends.map(FriendListItem)}</ul>;
};

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};

export default FriendList;
