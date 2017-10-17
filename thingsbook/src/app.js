console.log('App.js is running')

//JSX - JavaScript XML

const app = {
    title: 'Kahwaji web app',
    subtitle: 'Welcome to my page',
    options: []
}

const onFormSubmit = (e) => {
    e.preventDefault()

    const option = e.target.elements.option.value

    if(option) {
        app.options.push(option)
        e.target.elements.option.value = ''
        render()
    }
}

const removeAll = (e) => {
    e.preventDefault()

    app.options = []
    render()

}


const appRoot = document.getElementById('app')


const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1> 
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            <p>{app.options.length}</p>
            <button onClick = {removeAll}>Remove All</button>
            <ol>
                <li>item one</li>
                <li>item two</li>
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add option</button>
            </form>
        </div>
        )
        ReactDOM.render(template, appRoot)

}

render()