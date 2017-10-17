console.log('App.js is running')

//JSX - JavaScript XML

const appObj = {
    title: 'Kahwaji web app',
    subtitle: 'Welcome to my page',
    options: ['One', 'Two']
}

const template = (
<div>
    <h1>{appObj.title}</h1> 
    {appObj.subtitle && <p>{appObj.subtitle}</p>}
    <p>{appObj.options.length > 0 ? 'Here are your options' : 'No options'}</p>
    <ol>
        <li>item one</li>
        <li>item two</li>
    </ol>
</div>
)

let count =0
const addOne = () => {
    console.log('addOne')
}
const minusOne = () => {
    console.log('minuOne')
}

const reset = () => {
    console.log('Reset')
}

const templateTwo = (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={addOne}>+1</button>
        <button onClick={minusOne}>-1</button>
        <button onClick={reset}>Reset button</button>
    </div>

)



const appRoot = document.getElementById('app')

ReactDOM.render(templateTwo, appRoot)