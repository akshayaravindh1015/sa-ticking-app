import React, { useEffect, useState } from "react";

const Player = {
  PLAYER_ONE: "Player One",
  PLAYER_TWO: "Player Two",
  NO_ONE: "No One",
};
Object.freeze(Player);

const flex_center = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const Announcement = (props) => {
  if (!!props.winner) {
    return (
      <>
        <h2
          style={{
            textAlign: "center",
          }}
        >
          {props.winner} won the game!
        </h2>
        <div style={flex_center}>
          <button style={{ cursor: "pointer" }} onClick={props.resetBoard}>
            Reset
          </button>
        </div>
      </>
    );
  } else {
    return (
      <h3
        style={{
          textAlign: "center",
          color: props.player === Player.PLAYER_ONE ? "green" : "red",
        }}
      >
        {props.player}'s turn
      </h3>
    );
  }
};

const Cell = (props) => {
  return (
    <div
      onClick={props.onClick}
      style={{
        ...flex_center,
        backgroundColor: "#fff",
        fontSize: "24px",
        lineHeight: "18px",
        cursor: "pointer",
      }}
    >
      {props.markedBy &&
        (props.markedBy === Player.PLAYER_ONE ? (
          <span style={{ color: "green" }}>X</span>
        ) : (
          <span style={{ color: "red" }}>0</span>
        ))}
    </div>
  );
};

const TicTacToe = (props) => {
  const [winner, setWinner] = useState(null);
  const [currPlayer, setCurrPlayer] = useState(Player.PLAYER_ONE);
  const [board, setBoard] = useState(Array(9).fill(null));

  const resetBoard = () => {
    setBoard(Array(9).fill(null));
    setWinner(null);
    setCurrPlayer(Player.PLAYER_ONE);
  };

  const checkAndUpdateWinner = () => {
    let foundWinner = false;
    for (const combo of WINNING_COMBINATIONS) {
      const [idx1, idx2, idx3] = combo;
      let player = board[idx1];
      if (board[idx2] === player && board[idx3] === player) {
        foundWinner = true;
        setWinner(player);
        break;
      }
    }
    if (!foundWinner) {
      if (board.every((el) => !!el)) {
        setWinner(Player.NO_ONE);
      }
    }
  };

  const handleClick = (index) => {
    if (!board[index] && !winner) {
      setBoard((prevBoard) =>
        prevBoard.map((el, itr) => (index === itr ? currPlayer : el))
      );
      if (currPlayer === Player.PLAYER_ONE) {
        setCurrPlayer(Player.PLAYER_TWO);
      } else {
        setCurrPlayer(Player.PLAYER_ONE);
      }
    }
  };

  useEffect(() => {
    checkAndUpdateWinner();
  }, [board]);

  const boardStyle = {
    width: "250px",
    height: "250px",
    margin: "10px auto",
    display: "grid",
    gridTemplate: "repeat(3, 1fr) / repeat(3, 1fr)",
    gap: "4px",
    backgroundColor: "#333",
  };

  return (
    <div style={{ margin: "0 auto" }}>
      <Announcement
        player={currPlayer}
        winner={winner}
        resetBoard={resetBoard}
      />
      <br />
      <div style={boardStyle}>
        {board.map((el, index) => (
          <Cell
            key={index}
            markedBy={el}
            onClick={handleClick.bind(null, index)}
          />
        ))}
      </div>
    </div>
  );
};

export default TicTacToe;
