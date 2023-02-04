import React, { useState, useEffect } from 'react';
import './LeaderBoardStyle.css'
// import axios from 'axios';

const List = ({ children }) => (
  <div>{children}</div>
);

const ListItem = ({ rank, username, score }) => (
  <div className='grid'>
    <div className='grid-item-user-rank'>{rank}</div>
    <div className='grid-item'>{username}</div>
    <div className='grid-item'>{score}</div>
  </div>
);

const LeaderboardList = () => {
  const [users, setUsers] = useState([{
    id: 1,
    username: 'user1',
    score: 100
  },{
    id: 2,
    username: 'user2',
    score: 95
  },
  {
    id: 3,
    username: 'user3',
    score: 85
  },{
    id: 4,
    username: 'user4',
    score: 75
  },
  {
    id: 5,
    username: 'user5',
    score: 65
  }]);

  // useEffect(() => {
  //   axios.get('/api/leaderboard')
  //     .then(response => setUsers(response.data))
  //     .catch(error => console.error(error));
  // }, []);

  return (
    <div className='LB'>
      <h2>Byte&#39;s Leaderboard</h2>
      <div className='grid-title'>
        <div className='grid-item-rank'>Rank</div>
        <div className='grid-item-user'>User</div>
        <div className='grid-item-points'>Points</div>
        </div>
        <List>
        {users.map((user, index) => (
          <ListItem
            key={user.id}
            rank={index + 1}
            username={user.username}
            score={user.score}
          />
        ))}
      </List>
    </div>
    
  );
};

export default LeaderboardList;
