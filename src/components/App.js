

import Profile from './Profile/Profile'
import Statistics from './Statistics/Statistics'
import FriendList from './FriendsList/FriendList'
import Transactions from './Transactions/Transactions'

import userData from '../data/user.json'
import statsData from '../data/statistics.json'
import friendsData from '../data/friends.json'
import transactionsData from '../data/transactions.json'

const App = () => {
    return (
        <>
            <Profile
                name={userData.name}
                tag={userData.tag}
                location={userData.location}
                avatar={userData.avatar}
                stats={userData.stats} />
            
            <Statistics title="Upload stats" stats={statsData} />
            
            <FriendList friends={friendsData} />

            <Transactions items={transactionsData} />
        </>
    )
};

export default App