import React from 'react'

import Profile from './Profile/Profile'
import Statistics from './Statistics/Statistics'

import userData from '../data/user.json'
import statsData from '../data/statistics.json'

const App = () => {
    return (
        <>
            <Profile
                name={userData.name}
                tag={userData.tag}
                location={userData.location}
                avatar={userData.avatar}
                stats={userData.stats} />
            
            <Statistics items={statsData}/>
        </>
    )
};

export default App