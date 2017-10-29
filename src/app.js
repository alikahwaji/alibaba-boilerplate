import React from 'react'
import ReactDOM from 'react-dom'
import ThingsToDoApp from './components/ThingsToDo'

ReactDOM.render(<ThingsToDoApp />, document.getElementById('app'))

class OldSyntax {
  constructor () {
    this.name = 'Mike'
  }
  getGreeting() {
    return`Hi. my name is ${this.name}.`
  }
}

const oldSyntax = new OldSyntax()
console.log(oldSyntax.getGreeting())

// ---------

class NewSyntax {
  name = 'Max'
  getGreeting = () => {
    return`Hi. my name is ${this.name}.`
  }

}

const newSyntax = new NewSyntax()
const newGetGreeting = newSyntax.getGreeting
console.log(newGetGreeting())
