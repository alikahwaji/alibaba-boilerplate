const square = function (x) {
    return x*x
}

const squareArrow = (x) => {
    return x*x
}

const squareArrowTwo = (x) => x*x  //exprations functions


const getFirstName = (fullName) => {
    if(fullName) {
    return fullName.split(' ')[0]
    }
}

const getFirstNameNow = (fullName) => fullName.split(' ')[0]


console.log(square(8))
console.log(squareArrow(5))
console.log(squareArrowTwo(4))
console.log(getFirstName('Ali Kahwaji'))
console.log(getFirstNameNow('Mike Jon'))