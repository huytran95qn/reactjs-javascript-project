import { useState } from "react";
import { GameContainer } from './GameContainer/GameContainer';
import { Player } from './Player/Player';
import { TicTacToeLayout } from './Layout/Layout';
import './TicTacToe.scss';

const winConditions = [
    [1, 2, 3],
    [1, 4, 7],
    [1, 5, 9],
    [2, 5, 8],
    [3, 6, 9],
    [3, 5, 7]
    [4, 5, 6],
    [7, 8, 9],
];

const initializePlayer = (id, name, icon) => ({
    id,
    name,
    icon,
    result: [],
});

export const TicTacToe = () => {
    const [player1, setPlayer1] = useState(() => initializePlayer(1, 'Player 1', 'X'));

    const [player2, setPlayer2] = useState(() => initializePlayer(2, 'Player 2', 'O'));

    const [currentPlayer, setCurrentPlayer] = useState(player1);

    function onChangeContainer(index) {
        switch (currentPlayer.id) {
            case 1:
                setPlayer1({ ...player1, result: [...player1.result, index] });
                setCurrentPlayer(player2);
                break;

            case 2:
                setPlayer2({ ...player2, result: [...player2.result, index] });
                setCurrentPlayer(player1);
                break;
        }
    }

    return (
        <>
            <TicTacToeLayout
                header={(
                    <>
                        <Player
                            isActive={currentPlayer.id === player1.id}
                            player={player1}
                            setPlayer={setPlayer1} />
                        <div className='spacer'></div>
                        <Player
                            isActive={currentPlayer.id === player2.id}
                            player={player2}
                            setPlayer={setPlayer2} />
                    </>
                )}>

                <GameContainer
                    player={currentPlayer}
                    onChange={(index) => onChangeContainer(index)} />
            </TicTacToeLayout>
        </>
    )
}