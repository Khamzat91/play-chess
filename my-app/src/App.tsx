import React from 'react';
import './App.css';
import BoardComponent from './components/BoardComponent';
import { Board } from './models/Board';

function App() {
const [board, setBoard] = React.useState(new Board())

React.useEffect(() => {
restart()
}, [])

function restart () {
  const newBoard = new Board();
  newBoard.initCells()
  setBoard(newBoard)
}
  return (
    <div className="app">
  <BoardComponent/>
    </div>
  );
}

export default App;
