'use strict';

console.log('App.js is running');

//JSX - JavaScript XML

var appObj = {
    title: 'Kahwaji web app',
    subtitle: 'Welcome to my page'
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        appObj.title
    ),
    React.createElement(
        'p',
        null,
        appObj.subtitle
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'item one'
        ),
        React.createElement(
            'li',
            null,
            'item two'
        )
    )
);

var user = {
    name: 'Ali ',
    age: 37,
    location: 'Auckland'
};

function getLocation() {
    return 'Unkown';
}

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name
    ),
    React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    React.createElement(
        'p',
        null,
        'Location: ',
        getLocation(user.location)
    )
);
var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
