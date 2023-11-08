const Components = () => {
    return (
        <div>
            React Apps are built by Combining Components
            <WhyComponents />
            <ComponentRules />
        </div>
    )
}

const WhyComponents = ()  => {
    return (
        <div>
            <h2>Why Components?</h2>
            <ul>
                <li>Reusable Building Blocks</li>
                <li>Related Code Lives Together</li>
                <li>Separation of Concerns</li>
            </ul>
        </div>
    )
}

const ComponentRules = () => {
    return (
        <div>
            <h2>Component Function Must Follow Two Rules</h2>
            <ul>
                <li>
                    <h3>Name Starts With Uppercase Character</h3>
                    <p>The function name must start with an uppercase Character</p>
                    <p>Multi-word names should be written in PascalCase (e.g. "MyHeader")</p>
                    <p>It's recommended to pick a name tat describes the UI building Block</p>
                </li>

                <li>
                    <h3>Return "Renderable" Content</h3>
                    <p>The function name must return a value that can be rendered ("displayed on screen") by React</p>
                    <p>In most cases: Return JSX (string, number, boolean, null, array of allowed values)</p>
                </li>
            </ul>
        </div>
    )
}



export default Components;