import React, { useEffect, useState } from "react";

import Board from "./components/board"
// import Column from './components/column';
import { getBoard } from "./api/boards"
import './App.css';

function App() {
  const [board, setBoard] = useState([]);

  const refetchBoard = async () => {
    const retrieveBoard = await getBoard();
    setBoard(retrieveBoard);
  };

  useEffect(() => {
    refetchBoard();
  }, []);

  return (
    <div className="App">
      <header>
        <h1>TrackGols</h1>
      </header>
      <main>
        <Board
          board={board}
          refetchBoards={refetchBoard} />
      </main>
    </div>
  );
}

export default App;
