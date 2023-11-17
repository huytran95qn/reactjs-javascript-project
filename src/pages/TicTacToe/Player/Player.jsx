import { useState } from "react";
import './Player.scss'

export function Player({ name, icon }) {
    const [playerName, setPlayerName] = useState(name);

    const [isEditing, setIsEditing] = useState('')

    const playerNameContainer = isEditing
        ? <input
            className="player-name"
            type="text"
            required
            value={playerName}
            onChange={(event) => setPlayerName(event.target.value)}/>
        : <span className="player-name">{playerName}</span>;

        
    return (
        <div className="player">
            {playerNameContainer}

            <span className="player-icon">{icon}</span>
            
            <button className="player-button" 
                onClick={() => setIsEditing(!isEditing)}>{ isEditing ? 'Save' : 'Edit' }</button>
        </div>
    );
}