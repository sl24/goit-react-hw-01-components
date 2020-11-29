import Container from './Container/Container.jsx';

import Profile from './Profile/Profile.jsx';
import Statistics from './Statistics/Statistics.jsx';
import FriendList from './FriendsList/FriendList.jsx';
import Transactions from './Transactions/Transactions.jsx';

import userData from '../data/user.json';
import statsData from '../data/statistics.json';
import friendsData from '../data/friends.json';
import transactionsData from '../data/transactions.json';

const App = () => {
  return (
    <Container>
      <Profile
        name={userData.name}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />

      <Statistics title="Upload stats" stats={statsData} />

      <FriendList friends={friendsData} />

      <Transactions items={transactionsData} />
    </Container>
  );
};

export default App;
