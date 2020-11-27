import FriendListItem from './FriendListItem'

import PropTypes from 'prop-types';

const FriendList = ({ friends }) => {
    if (friends.length === 0) return null
    return <ul class="friend-list">{friends.map(FriendListItem)}</ul>
}

FriendList.propTypes = {
    friends: PropTypes.array.isRequired
}

export default FriendList