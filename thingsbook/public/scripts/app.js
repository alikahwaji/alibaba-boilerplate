'use strict';

// arugments object - no longer bound with function

var add = function add(a, b) {
    console.log(arguments);
    return a + b;
};

var AddTwo = function AddTwo(a, b) {
    return a + b;
};

console.log(add(1, 2));
console.log(AddTwo(3, 4));

// this keyword - no longer bound

var user = {
    name: 'Mike',
    cities: ['Dubai', 'KL', 'Auckland'],
    printPlacesLived: function printPlacesLived() {
        var _this = this;

        return this.cities.map(function (city) {
            return _this.name + ' has lived in ' + city + '!';
        });
    }
};

console.log(user.printPlacesLived());

var multiplier = {
    numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    multiplyBy: 2,
    multiply: function multiply() {
        var _this2 = this;

        return this.numbers.map(function (number) {
            return _this2.multiplyBy * number;
        });
    }
};

console.log(multiplier.multiply());
