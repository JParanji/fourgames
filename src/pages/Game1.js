import React from "react";
import SquarerootinGame from "../components/SquarerootinGame";

function Game1() {
  return (
    <div>
      <h1>Game 1: Squarerootin</h1>
      <p>Loading SquarerootinGame...</p> {/* This helps test if the component loads */}
      <SquarerootinGame />
    </div>
  );
}

export default Game1;
