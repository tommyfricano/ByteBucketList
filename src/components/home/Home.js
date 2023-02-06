import React from "react"
import LeaderboardList from "./leaderboard/LeaderBoardList";
import Map from "./map/Map";

const Home = () => {
    return(
        <React.Fragment>
            <LeaderboardList />
            {/* <Map /> */}
        </React.Fragment>
    );
}

export default Home;