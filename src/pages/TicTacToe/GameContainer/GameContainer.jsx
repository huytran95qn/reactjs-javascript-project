import './GameContainer.scss'
import React, { useState } from 'react';
import { emptyContainer } from '../Utils/Utils'

export const GameContainer = ({ player, onChange }) => {
    const [cells, setCells] = useState(emptyContainer())

    function makeMove(index) {
        cells[index] = player.icon;
        setCells([...cells]);
        onChange(index)
    }

    return (
        <div className="game-container">
            <div className="board">
                {
                    cells.map((cell, index) => (
                        <div key={index} className="cell" onClick={() => makeMove(index)}>{cell}</div>)
                    )
                }
            </div>
        </div>
    )
}

