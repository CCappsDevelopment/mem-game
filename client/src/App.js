import React, { useState } from "react";
import "./App.css";
import ScoreBoard from "./ScoreBoard";
import MemoryCard from "./MemoryCard";

export default function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  function incrementScore() {  
    setCurrentScore(currentScore + 1);
  }

  function resetScore() {
    if (currentScore > bestScore) {
      setBestScore(currentScore);
    }
    setCurrentScore(0);
  }

  return (
    <div className="App">
      <header className="App-header">
        <ScoreBoard
          currentScore={currentScore}
          bestScore={bestScore}
        />
        <div style={{ padding: 20 + "px" }}></div>
        <MemoryCard
          incrementScore={incrementScore}
          resetScore={resetScore}
        />
        <div style={{ padding: 20 + "px" }}></div>
      </header>
      <p>poo</p>
    </div>
  );
}
