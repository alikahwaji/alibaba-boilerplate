console.log('App.js is running')

//JSX - JavaScript XML

var template = (
<div>
    <h1>Things Book App developed by Ali Kahwaji</h1> 
    <p>This is some info</p>
    <ol>
        <li>item one</li>
        <li>item two</li>
    </ol>
</div>
)

var templateTwo = (
    <div>
        <h1>Ali Kahwaji</h1>
        <p>Age: 37</p>
        <p>Location: Auckland</p>
    </div>
)
var appRoot = document.getElementById('app')

ReactDOM.render(templateTwo, appRoot)