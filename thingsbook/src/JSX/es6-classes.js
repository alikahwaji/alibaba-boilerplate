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

const me = new Person('Mike Jack', 26)

console.log(me.getDescription())

const other = new Person()
console.log(other.getDescription())

