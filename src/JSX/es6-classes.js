class Person  {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name 
        this.age = age
    }
    getGretting() {
        return `Hi, Im ${this.name} !`
    }
    getDescription(){
        return`${this.name} is ${this.age} years old.`
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age)
        this.major = major
    }
    hasMajor(){
        return !!this.major
    }
    getDescription() {
        let description = super.getDescription()

        if(this.hasMajor()) {
            description += ` Their major is ${this.major}.`
        }
        return description
    }
}

class Traveler extends Person {
    constructor(name, age, city){
        super(name, age)
        this.city = city 
    }
    fromCity() {
        return !!this.city
    }
    getGretting() {
        let greeting = super.getGretting()

        if(this.fromCity()){
            greeting += ` Im visiting from ${this.city}`
        }
        return greeting
    }
}

const me = new Traveler('Mike Jack', 26, 'Auckland')

console.log(me.getGretting())

const other = new Traveler()
console.log(other.getGretting())

