var nameVar = 'Mark'
var nameVar = 'Mike'
console.log('nameVar', nameVar)

let nameLet = 'Jan'
 nameLet = 'Brad'
console.log('nameLet', nameLet)

const nameConst = 'Frank'
console.log('nameConst', nameConst)

function getPetName () {
   let petName = 'mimi'
    return petName
}

const petName = getPetName()
console.log(petName)

var fullName = 'Mike James'
let firstName

if(fullName) {
    firstName = fullName.split(' ')[0]
    console.log(firstName)
}

console.log(firstName)