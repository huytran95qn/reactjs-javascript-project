import './TicTacToe.css';

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
                <LayoutBody />
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

function LayoutBody() {
    return (
        <div className='layout-body flex flex-direction-column flex-auto'>
            <div className="flex flex-direction">
                <div className='flex-auto'></div>
                <div className='flex-auto'></div>
                <div className='flex-auto'></div>
            </div>
            <div className="flex flex-direction">
                <div className='flex-auto'></div>
                <div className='flex-auto'></div>
                <div className='flex-auto'></div>
            </div>
            <div className="flex flex-direction">
                <div className='flex-auto'></div>
                <div className='flex-auto'></div>
                <div className='flex-auto'></div>
            </div>
        </div>
    )
}

export default TicTacToe;
