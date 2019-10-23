import React from 'react';
import BoardTile from './components/BoardTile';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <main className="flexbox">
        <BoardTile id="board-1" className="board">
          <Card id="card-1" className="card" draggable="true">
            <p>Card One</p>
          </Card>
        </BoardTile>
        <BoardTile id="board-2" className="board">
          <Card id="card-2" className="card" draggable="true">
            <p>Card Two</p>
          </Card>
        </BoardTile>
      </main>
    </div>
  );
}

export default App;
