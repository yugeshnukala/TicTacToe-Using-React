import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Winner from "./winner.js";


class App extends React.Component {
  state = {
    player: ["😀", "O"],
    count: 0,
    squares: [null, null, null, null, null, null, null, null, null],
    gameover: false,
    winnerName: "",
  };

  setPlayer = (box, ch) => {
    if (this.state.squares[box] == null && !this.state.gameover) {
      this.state.squares[box] = ch;
      this.state.count++;
      this.forceUpdate();
      this.checkAnyWins();
      if (this.state.count > 8) {
        setTimeout(() => {
          this.handleReset();
        }, 3000);
      }
    }
  };

  winner = (name) => {
    this.state.gameover = true;
    this.state.winnerName = name;
  };

  checkAnyWins = () => {
    if (
      this.state.squares[0] != null &&
      this.state.squares[1] != null &&
      this.state.squares[2] != null &&
      this.state.squares[0] === this.state.squares[1] &&
      this.state.squares[1] === this.state.squares[2]
    ) {
      this.winner(this.state.squares[2]);
    }
    if (
      this.state.squares[3] != null &&
      this.state.squares[4] != null &&
      this.state.squares[5] != null &&
      this.state.squares[3] === this.state.squares[4] &&
      this.state.squares[4] === this.state.squares[5]
    ) {
      this.winner(this.state.squares[5]);
    }
    if (
      this.state.squares[6] != null &&
      this.state.squares[7] != null &&
      this.state.squares[8] != null &&
      this.state.squares[6] === this.state.squares[7] &&
      this.state.squares[7] === this.state.squares[8]
    ) {
      this.winner(this.state.squares[8]);
    }
    if (
      this.state.squares[0] != null &&
      this.state.squares[3] != null &&
      this.state.squares[6] != null &&
      this.state.squares[0] === this.state.squares[3] &&
      this.state.squares[3] === this.state.squares[6]
    ) {
      this.winner(this.state.squares[6]);
    }
    if (
      this.state.squares[1] != null &&
      this.state.squares[4] != null &&
      this.state.squares[7] != null &&
      this.state.squares[1] === this.state.squares[4] &&
      this.state.squares[4] === this.state.squares[7]
    ) {
      this.winner(this.state.squares[7]);
    }
    if (
      this.state.squares[2] != null &&
      this.state.squares[5] != null &&
      this.state.squares[8] != null &&
      this.state.squares[2] === this.state.squares[5] &&
      this.state.squares[5] === this.state.squares[8]
    ) {
      this.winner(this.state.squares[8]);
    }
    if (
      this.state.squares[2] != null &&
      this.state.squares[4] != null &&
      this.state.squares[6] != null &&
      this.state.squares[2] === this.state.squares[4] &&
      this.state.squares[4] === this.state.squares[6]
    ) {
      this.winner(this.state.squares[6]);
    }
    if (
      this.state.squares[0] != null &&
      this.state.squares[4] != null &&
      this.state.squares[8] != null &&
      this.state.squares[0] === this.state.squares[4] &&
      this.state.squares[4] === this.state.squares[8]
    ) {
      this.winner(this.state.squares[8]);
    }
  };

  winnerTag = () => {

    if (this.state.gameover)
      return <Winner winnerName={this.state.winnerName} />;
    if (this.state.count > 8) {
      return <h3>Game Draw!</h3>;
    }
    return <h3>Player's Turn : {this.state.player[this.state.count % 2]}</h3>;
  };

  handleReset = () => {
    this.setState({
      count: 0,
      squares: [null, null, null, null, null, null, null, null, null],
      gameover: false,
      winnerName: "",
    });
  };

  render() {
    return (
      <div className="container">
        <div className="App-header">Tic - Tac - Toe</div>
        <div className="win">{this.winnerTag()}</div>
        <div className="board">
          <div className="row">
            <button
              onClick={() =>
                this.setPlayer(0, this.state.player[this.state.count % 2])
              }
              className="but"
            >
              {this.state.squares[0]}
            </button>
            <button
              onClick={() =>
                this.setPlayer(1, this.state.player[this.state.count % 2])
              }
              className="but"
            >
              {this.state.squares[1]}
            </button>
            <button
              onClick={() =>
                this.setPlayer(2, this.state.player[this.state.count % 2])
              }
              className="but"
            >
              {this.state.squares[2]}
            </button>
          </div>
          <div className="row">
            <button
              onClick={() =>
                this.setPlayer(3, this.state.player[this.state.count % 2])
              }
              className="but"
            >
              {this.state.squares[3]}
            </button>
            <button
              onClick={() =>
                this.setPlayer(4, this.state.player[this.state.count % 2])
              }
              className="but"
            >
              {this.state.squares[4]}
            </button>
            <button
              onClick={() =>
                this.setPlayer(5, this.state.player[this.state.count % 2])
              }
              className="but"
            >
              {this.state.squares[5]}
            </button>
          </div>
          <div className="row">
            <button
              onClick={() =>
                this.setPlayer(6, this.state.player[this.state.count % 2])
              }
              className="but"
            >
              {this.state.squares[6]}
            </button>
            <button
              onClick={() =>
                this.setPlayer(7, this.state.player[this.state.count % 2])
              }
              className="but"
            >
              {this.state.squares[7]}
            </button>
            <button
              onClick={() =>
                this.setPlayer(8, this.state.player[this.state.count % 2])
              }
              className="but"
            >
              {this.state.squares[8]}
            </button>
          </div>
        </div>
        <div>
          <button
            className="btn-lg btn-secondary resbut"
            onClick={this.handleReset}
          >
            Reset
          </button>
        </div>
      </div>
    );
  }
}

export default App;
