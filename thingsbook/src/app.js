console.log('App.js is running')

//JSX - JavaScript XML

var appObj = {
    title: 'Kahwaji web app',
    subtitle: 'Welcome to my page',
    options: ['One', 'Two']
}

var template = (
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

var user = {
    name: 'Ali ',
    age: 37,
    location: 'Auckland'
}

function getLocation(location) {
    if(location) {
        return <p>location: {location}</p>
    } 
}

var templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
)
var appRoot = document.getElementById('app')

ReactDOM.render(template, appRoot)