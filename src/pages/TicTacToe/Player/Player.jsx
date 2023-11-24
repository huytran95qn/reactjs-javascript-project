import { useState } from "react";
import './Player.scss'

export function Player({ player, setPlayer, isActive }) {
    const [isEditing, setIsEditing] = useState('')

    const playerNameContainer = isEditing
        ? <input
            className="player-name"
            type="text"
            required
            value={player.name}
            onChange={(event) => setPlayer({
                ...player,
                name: event.target.value
            })}/>
        : <span className="player-name">{player.name}</span>;

    const className = `player ${isActive ? 'active' : ''}`
    return (
        <div className={className}>
            {playerNameContainer}

            <span className="player-icon">{player.icon}</span>
            
            <button className="player-button" 
                onClick={() => setIsEditing(!isEditing)}>{ isEditing ? 'Save' : 'Edit' }</button>
        </div>
    );
}