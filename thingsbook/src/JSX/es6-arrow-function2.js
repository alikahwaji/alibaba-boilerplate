// arugments object - no longer bound with function

const add = function (a, b) {
    console.log(arguments)
    return a + b
}

const AddTwo = (a, b) => {
    return a + b
}

console.log(add(1, 2))
console.log(AddTwo(3, 4))


// this keyword - no longer bound

const user = {
    name: 'Mike',
    cities: ['Dubai','KL','Auckland'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city + '!'
        )
    }
}

console.log(user.printPlacesLived())

const multiplier = {
    numbers: [1,2,3,4,5,6,7,8,9],
    multiplyBy: 2,
    multiply(){
        return this.numbers.map((number) => this.multiplyBy * number)
    }
}

console.log(multiplier.multiply())