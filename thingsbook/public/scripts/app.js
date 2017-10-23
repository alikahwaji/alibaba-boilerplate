'use strict';

var visibility = false;

var toggleVisibility = function toggleVisibility() {
    visibility = !visibility;
    render();
};
var render = function render() {
    var jsx = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Visibility Toggle'
        ),
        React.createElement(
            'button',
            { onClick: toggleVisibility },
            visibility ? 'Hide detalis' : 'Show detalis'
        ),
        visibility && React.createElement(
            'div',
            null,
            React.createElement(
                'p',
                null,
                'These are some detalis'
            )
        )
    );

    ReactDOM.render(jsx, document.getElementById('app'));
};

render();
