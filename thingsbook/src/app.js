console.log('App.js is running')

//JSX - JavaScript XML

var appObj = {
    title: 'Kahwaji web app',
    subtitle: 'Welcome to my page'
}

var template = (
<div>
    <h1>{appObj.title}</h1> 
    <p>{appObj.subtitle}</p>
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

var templateTwo = (
    <div>
        <h1>{user.name}</h1>
        <p>Age: {user.age}</p>
        <p>Location: {user.location}</p>
    </div>
)
var appRoot = document.getElementById('app')

ReactDOM.render(template, appRoot)