export { default as GameContainer } from './GameContainer/GameContainer';
import './TicTacToe.scss';

const TicTacToe = () => {
    return (
        <>
            <Layout
                header={(
                    <>
                        <LayoutUser active="true"/>
                        <Spacer />
                        <LayoutUser />
                    </>
                )}>
                <GameContainer />
            </Layout>
        </>
    )
}

function Spacer() {
    return (
        <div className='spacer'></div>
    )
}

function LayoutUser({ active = false }) {
    let className = "layout-user flex flex-direction flex-center-center";
    className += (active ? ' active' : '' )
    return (
        <div className={className}>
            <input  />
            <Spacer />
            <button>Edit</button>
        </div>
    )
}

function Layout({ header, children }) {
    return (
        <div className="layout flex flex-direction-column">
            <div className="flex flex-direction">
                {header}
            </div>

            {children}
        </div>
    )
}

export default TicTacToe;
