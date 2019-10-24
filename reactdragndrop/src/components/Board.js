import React from 'react'
import BoardTile from './BoardTile';
import Card from './Card';

function Board() {
    return (
        <main className="board">
            <BoardTile id="boardTile-1" col="1" row="1" className="boardTile">
                <Card id="card-1" className="card" draggable="true">
                    <p>Card One</p>
                </Card>
            </BoardTile>
            <BoardTile id="boardTile-2" col="2" row="1" className="boardTile">
                <Card id="card-2" className="card" draggable="true">
                    <p>Card Two</p>
                </Card>
            </BoardTile>
            <BoardTile id="boardTile-3" col="3" row="1" className="boardTile">
                {/* <Card id="card-3" className="card" draggable="true">
            <p>Card Three</p>
          </Card> */}
            </BoardTile>
            <BoardTile id="boardTile-4" col="1" row="2" className="boardTile">
                <Card id="card-4" className="card" draggable="true">
                    <p>Card Four</p>
                </Card>
            </BoardTile>
            <BoardTile id="boardTile-5" col="2" row="2" className="boardTile">
                <Card id="card-5" className="card" draggable="true">
                    <p>Card Five</p>
                </Card>
            </BoardTile>
            <BoardTile id="boardTile-6" col="3" row="2" className="boardTile">
                <Card id="card-6" className="card" draggable="true">
                    <p>Card Six</p>
                </Card>
            </BoardTile>
            <BoardTile id="boardTile-7" col="1" row="3" className="boardTile">
                <Card id="card-7" className="card" draggable="true">
                    <p>Card Seven</p>
                </Card>
            </BoardTile>
            <BoardTile id="boardTile-8" col="2" row="3" className="boardTile">
                <Card id="card-8" className="card" draggable="true">
                    <p>Card Eight</p>
                </Card>
            </BoardTile>
            <BoardTile id="boardTile-9" col="3" row="3" className="boardTile">
                <Card id="card-9" className="card" draggable="true">
                    <p>Card Nine</p>
                </Card>
            </BoardTile>
        </main>
    )
}

export default Board
