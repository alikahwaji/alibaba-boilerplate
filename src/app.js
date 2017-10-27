import React from 'react'
import ReactDOM from 'react-dom'
import AddOption from './components/AddOption'
import Option from './components/Option'
import Action from './components/Action'
import Header from './components/Header'

class ThingsToDoApp extends React.Component {
  constructor (props) {
    super(props)
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
    this.handlePick = this.handlePick.bind(this)
    this.handleAddOption = this.handleAddOption.bind(this)
    this.handleDeleteOption = this.handleDeleteOption.bind(this)
    this.state = {
      options: props.options
    }
  }
  componentDidMount () {
    try {
      const json = localStorage.getItem('options')
      const options = JSON.parse(json)

      if (options) {
        this.setState(() => ({ options }))
      }
    } catch (e) {

    }
  }
  componentDidUpdate (prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options)
      localStorage.setItem('options', json)
      console.log('saving data')
    }
  }
  componentWillUnmount () {
    console.log('componentWillUnmount')
  }
  handleDeleteOptions () {
    this.setState(() => ({ options: [] }))
  }

  handleDeleteOption (optionToRemove) {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option)
    }))
  }

  handlePick () {
    const randomNum = Math.floor(Math.random() * this.state.options.length)
    const option = this.state.options[randomNum]
    alert(option)
  }
  handleAddOption (option) {
    if (!option) {
      return 'Enter valid value to add item'
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists'
    }
    this.setState((prevState) => ({options: prevState.options.concat(option)}))
  }
  render () {
    const subtitle = 'Put your plans in the app'
    return (
      <div>
        <Header subtitle={subtitle}/>
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick ={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions ={this.handleDeleteOptions}
          handleDeleteOption= {this.handleDeleteOption}
        />
        <AddOption
          handleAddOption={this.handleAddOption}
        />
      </div>
    )
  }
}

ThingsToDoApp.defaultProps = {
  options: []
}

const Options = (props) => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Remove All</button>
      {props.options.length === 0 && <p>Please add an option!</p>}
      {
        props.options.map((option) => (
          <Option
            key={option}
            optionText={option}
            handleDeleteOption ={props.handleDeleteOption}
          />
        ))
      }

    </div>
  )
}

ReactDOM.render(<ThingsToDoApp />, document.getElementById('app'))
