import FriendListItem from './FriendListItem';

import PropTypes from 'prop-types';

import s from './FriendList.module.css';

const FriendList = ({ friends }) => {
  if (friends.length === 0) return null;
  return <ul className={s.friendLlist}>{friends.map(FriendListItem)}</ul>;
};

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};

export default FriendList;
