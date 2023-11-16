import './GameContainer.scss'

const GameContainer = () => {
    function makeMove(index) {
        console.log(index)
    }

    return (
        <div class="game-container">
            <div class="board">
                <div class="cell" onclick={makeMove(0)}></div>
                <div class="cell" onclick={makeMove(1)}></div>
                <div class="cell" onclick={makeMove(2)}></div>
                <div class="cell" onclick={makeMove(3)}></div>
                <div class="cell" onclick={makeMove(4)}></div>
                <div class="cell" onclick={makeMove(5)}></div>
                <div class="cell" onclick={makeMove(6)}></div>
                <div class="cell" onclick={makeMove(7)}></div>
                <div class="cell" onclick={makeMove(8)}></div>
            </div>
        </div>
    )
}

export default GameContainer;
