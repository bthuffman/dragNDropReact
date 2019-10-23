import React from 'react'

function BoardTile(props) {
    const drop = e => {
        e.preventDefault();
        // Transfer the id between this event, get the element by id
        // and append it to the boardTile
        const card_id = e.dataTransfer.getData('card_id');

        const card = document.getElementById(card_id);
        card.style.display = 'block';

        e.target.appendChild(card);
    }

    // Allows you to continue with function of dropping.
    const dragOver = e => {
        e.preventDefault();
    }
    return (
        <div
            id={props.id}
            // called when we drop over the boardTile
            className={props.className}
            onDrop={drop}
            // called when call one of cards over the baord. 
            onDragOver={dragOver}
        >
            { props.children }
        </div>
    )
}

export default BoardTile;

