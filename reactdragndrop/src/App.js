import React from 'react';
import BoardTile from './components/BoardTile';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <main className="board">
        <BoardTile id="boardTile-1" className="boardTile">
          <Card id="card-1" className="card" draggable="true">
            <p>Card One</p>
          </Card>
        </BoardTile>
        <BoardTile id="boardTile-2" className="boardTile">
          <Card id="card-2" className="card" draggable="true">
            <p>Card Two</p>
          </Card>
        </BoardTile>
        <BoardTile id="boardTile-3" className="boardTile">
          {/* <Card id="card-3" className="card" draggable="true">
            <p>Card Three</p>
          </Card> */}
        </BoardTile>
        <BoardTile id="boardTile-4" className="boardTile">
          <Card id="card-4" className="card" draggable="true">
            <p>Card Four</p>
          </Card>
        </BoardTile>
        <BoardTile id="boardTile-5" className="boardTile">
          <Card id="card-5" className="card" draggable="true">
            <p>Card Five</p>
          </Card>
        </BoardTile>
        <BoardTile id="boardTile-6" className="boardTile">
          <Card id="card-6" className="card" draggable="true">
            <p>Card Six</p>
          </Card>
        </BoardTile>
        <BoardTile id="boardTile-7" className="boardTile">
          <Card id="card-7" className="card" draggable="true">
            <p>Card Seven</p>
          </Card>
        </BoardTile>
        <BoardTile id="boardTile-8" className="boardTile">
          <Card id="card-8" className="card" draggable="true">
            <p>Card Eight</p>
          </Card>
        </BoardTile>
        <BoardTile id="boardTile-9" className="boardTile">
          <Card id="card-9" className="card" draggable="true">
            <p>Card Nine</p>
          </Card>
        </BoardTile>
      </main>
    </div>
  );
}

export default App;
