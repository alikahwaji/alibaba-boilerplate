'use strict';

console.log('App.js is running');

//JSX - JavaScript XML

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Things Book App developed by Ali Kahwaji'
    ),
    React.createElement(
        'p',
        null,
        'This is some info'
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

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Ali Kahwaji'
    ),
    React.createElement(
        'p',
        null,
        'Age: 37'
    ),
    React.createElement(
        'p',
        null,
        'Location: Auckland'
    )
);
var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
