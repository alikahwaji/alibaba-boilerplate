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

const me = new Student('Mike Jack', 26, 'Computer Sciance')

console.log(me.getDescription())

const other = new Student()
console.log(other.getDescription())

