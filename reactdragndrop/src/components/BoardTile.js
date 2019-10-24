import React from 'react'

class BoardTile extends React.Component {
    drop = e => {
        e.preventDefault();
        // Transfer the id between this event, get the element by id
        // and append it to the boardTile
        const card_id = e.dataTransfer.getData('card_id');

        const card = document.getElementById(card_id);
        card.style.display = 'block';

        e.target.appendChild(card);
    }

    // Allows you to continue with function of dropping.
    dragOver = e => {
        e.preventDefault();
    }

    render() {
        return (
            <div
                id={this.props.id}
                col={this.props.col}
                row={this.props.row}
                // called when we drop over the boardTile
                className={this.props.className}
                onDrop={this.drop}
                // called when call one of cards over the baord. 
                onDragOver={this.dragOver}
            >
                {this.props.children}
            </div>
        )
    }
}

export default BoardTile;

