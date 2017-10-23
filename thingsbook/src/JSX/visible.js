let visibility = false

const toggleVisibility = () => {
    visibility = !visibility
    render()
}
const render = () => {
    const jsx = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleVisibility}>
                {visibility ? 'Hide detalis' : 'Show detalis'}
            </button>
            {visibility && (
                <div>
                <p>These are some detalis</p>
                </div>
            )}
        </div>

    )

    ReactDOM.render(jsx, document.getElementById('app'))
}

render()