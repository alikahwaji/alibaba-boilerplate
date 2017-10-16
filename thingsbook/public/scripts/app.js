'use strict';

var square = function square(x) {
    return x * x;
};

var squareArrow = function squareArrow(x) {
    return x * x;
};

var squareArrowTwo = function squareArrowTwo(x) {
    return x * x;
}; //exprations functions


var getFirstName = function getFirstName(fullName) {
    if (fullName) {
        return fullName.split(' ')[0];
    }
};

var getFirstNameNow = function getFirstNameNow(fullName) {
    return fullName.split(' ')[0];
};

console.log(square(8));
console.log(squareArrow(5));
console.log(squareArrowTwo(4));
console.log(getFirstName('Ali Kahwaji'));
console.log(getFirstNameNow('Mike Jon'));
