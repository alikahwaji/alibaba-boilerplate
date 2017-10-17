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
const templateTwo = (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={addOne}>+1</button>
    </div>

)

const minusOne = () => {
    console.log('minuOne')
}
const templateMinus = (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={minusOne}>-1</button>
    </div>
)

const reset = () => {
    console.log('Reset')
}

const templateReset = (
    <div>
        <h1>Reset button</h1>
        <button onClick={reset}>Reset button</button>
    </div>
)




const appRoot = document.getElementById('app')

ReactDOM.render(templateReset, appRoot)