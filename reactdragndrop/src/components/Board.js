import React from 'react'
import BoardTile from './BoardTile';
import Card from './Card';

function Board() {
    return (
        <main className="board">
            <BoardTile id="boardTile-1" col="1" row="1" className="boardTile">
                <Card
                    id="card-1" draggable="true"
                    topColor={2}
                    rightColor={4}
                    bottomColor={5}
                    leftColor={3}
                >
                </Card>
            </BoardTile>
            <BoardTile id="boardTile-2" col="2" row="1" className="boardTile">
                <Card 
                id="card-2" 
                draggable="true"
                 topColor={2}
                    rightColor={4}
                    bottomColor={5}
                    leftColor={3}>
                </Card>
            </BoardTile>
            <BoardTile id="boardTile-3" col="3" row="1" className="boardTile">
                <Card
                 id="card-3"  draggable="true"                  topColor={2}
                 rightColor={4}
                 bottomColor={5}
                 leftColor={3}>>
            <p>Card Three</p>
          </Card>
            </BoardTile>
            <BoardTile id="boardTile-4" col="1" row="2" className="boardTile">
                <Card id="card-4" draggable="true" topColor={2}
                    rightColor={4}
                    bottomColor={5}
                    leftColor={3}>
                </Card>
            </BoardTile>
            <BoardTile id="boardTile-5" col="2" row="2" className="boardTile">
                <Card id="card-5" draggable="true" topColor={2}
                    rightColor={4}
                    bottomColor={5}
                    leftColor={3}>
                </Card>
            </BoardTile>
            <BoardTile id="boardTile-6" col="3" row="2" className="boardTile">
                <Card id="card-6" draggable="true" topColor={2}
                    rightColor={4}
                    bottomColor={5}
                    leftColor={3}>
                </Card>
            </BoardTile>
            <BoardTile id="boardTile-7" col="1" row="3" className="boardTile">
                <Card id="card-7" draggable="true" topColor={2}
                    rightColor={4}
                    bottomColor={5}
                    leftColor={3}>
                </Card>
            </BoardTile>
            <BoardTile id="boardTile-8" col="2" row="3" className="boardTile">
                <Card id="card-8" draggable="true" topColor={2}
                    rightColor={4}
                    bottomColor={5}
                    leftColor={3}>
                </Card>
            </BoardTile>
            <BoardTile id="boardTile-9" col="3" row="3" className="boardTile">
                <Card id="card-9" draggable="true" topColor={2}
                    rightColor={4}
                    bottomColor={5}
                    leftColor={3}>
                </Card>
            </BoardTile>
        </main>
    )
}

export default Board
