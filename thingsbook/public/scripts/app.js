'use strict';

console.log('App.js is running');

//JSX - JavaScript XML

var appObj = {
    title: 'Kahwaji web app',
    subtitle: 'Welcome to my page',
    options: ['One', 'Two']
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        appObj.title
    ),
    appObj.subtitle && React.createElement(
        'p',
        null,
        appObj.subtitle
    ),
    React.createElement(
        'p',
        null,
        appObj.options.length > 0 ? 'Here are your options' : 'No options'
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

function getLocation(location) {
    if (location) {
        return React.createElement(
            'p',
            null,
            'location: ',
            location
        );
    }
}

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name ? user.name : 'Anonymous'
    ),
    user.age && user.age >= 18 && React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    getLocation(user.location)
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
