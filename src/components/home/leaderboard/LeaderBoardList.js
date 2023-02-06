import React, { useState, useEffect, setState } from 'react';
import './LeaderBoardStyle.css'
import update from "./imgs/refresh.png"

const List = ({ children }) => (
  <div>{children}</div>
);

const ListItem = ({ rank, username, points }) => (
  <div className='grid'>
    <div className='grid-item-user-rank'>{rank}</div>
    <div className='grid-item'>{username}</div>
    <div className='grid-item'>{points}</div>
  </div>
);

const LeaderboardList = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [refresh, setRefresh] = useState();
  let num = 0;

  useEffect(() => {

    const fetchBoard = async () => {
      const response = await fetch('http://localhost:4000/api/leaderboard', {
              method: 'GET',
              headers: {'Content-Type': 'application/json'}
          })
          const json = await response.json() 
          console.log(json);
          setUsers(json);
          
          console.log(response);
          console.log(response.body);
          if(!response.ok) {
              setIsLoading(false)
              setError(json.error)
          }
        }

      fetchBoard();

      }, [refresh]);

  console.log(users);

  const onRefresh = () => {
    num += 1;
    setRefresh(num);
  }

  return (
    <div className='LB'>
      <img src={update} alt="refresh button" onClick={onRefresh}></img>
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
            points={user.points}
          />
        ))}
      </List>
    </div>
    
  );
};

export default LeaderboardList;
