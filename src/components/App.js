

import Profile from './Profile/Profile'
import Statistics from './Statistics/Statistics'
import FriendList from './FriendsList/FriendList'

import userData from '../data/user.json'
import statsData from '../data/statistics.json'
import friendsData from '../data/friends.json'

const App = () => {
    return (
        <>
            <Profile
                name={userData.name}
                tag={userData.tag}
                location={userData.location}
                avatar={userData.avatar}
                stats={userData.stats} />
            
            <Statistics items={statsData} />
            
            <FriendList friends={friendsData} />
        </>
    )
};

export default App