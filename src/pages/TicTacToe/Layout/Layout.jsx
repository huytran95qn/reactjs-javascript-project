import './Layout.scss'

export function TicTacToeLayout({ header, children }) {
    return (
        <div className="layout">
            <div className="layout-header">
                {header}
            </div>

            {children}
        </div>
    )
}
