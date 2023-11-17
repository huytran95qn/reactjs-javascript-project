import { GameContainer } from './GameContainer/GameContainer';
import { Player } from './Player/Player';
import { TicTacToeLayout } from './Layout/Layout';

import './TicTacToe.scss';

export const TicTacToe = () => {
    let player1 = {
        name: 'Player 1',
        icon: 'X'
    };

    let player2 = {
        name: 'Player 2',
        icon: 'O'
    };

    let currentPlayer = player1;

    return (
        <>
            <TicTacToeLayout
                header={(
                    <>
                        <Player {...player1} />
                        <Spacer />
                        <Player {...player2}/>
                    </>
                )}>
                <GameContainer player={currentPlayer}/>
            </TicTacToeLayout>
        </>
    )
}

function Spacer() {
    return (
        <div className='spacer'></div>
    )
}
