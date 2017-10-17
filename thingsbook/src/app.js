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

const makeDecision = (e) => {
    const randomNum = Math.floor(Math.random() * app.options.length)
    const option = app.options[randomNum]
    alert(option)
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
            <button disabled={app.options.length === 0}onClick={makeDecision}>What Should I do?</button>
            <button onClick = {removeAll}>Remove All</button>
            <ol>
            {
                app.options.map((option) => {
                    return <li key={option}>{option}</li>
                })
            }
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