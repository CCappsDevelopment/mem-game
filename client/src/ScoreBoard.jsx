import "./ScoreBoard.css";

import React from "react";

class ScoreBoard extends React.Component {
  render() {
    return (
      <div>
        <div id="current-score">
          <h2>Current Score</h2>
          <h1 className="score">{this.props.currentScore}</h1>
        </div>
        <div id="best-score">
          <h2>Best Score</h2>
          <h1 className="score">{this.props.bestScore}</h1>
        </div>
      </div>
    );
  }
}
export default ScoreBoard;
