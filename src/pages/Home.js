import React from "react";
import GameCard from "../components/GameCard";

function Home() {
    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
            <h1>Welcome to the Game Hub</h1>
            <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
                <GameCard title="Game 1" route="/game1" />
                <GameCard title="Game 2" route="/game2" />
                <GameCard title="Game 3" route="/game3" />
                <GameCard title="Game 4" route="/game4" />
            </div>
        </div>
    );
}

export default Home;
