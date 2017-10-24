class ThingsToDoApp extends React.Component {
    render() {
        const title = 'ThingsToDoApp'
        const subtitle = 'Put your plans in the app'
        const options = ['Thing one', 'Thing two', 'Thing three', 'Thing four']
        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action />
                <Options options={options}/>
                <AddOption />
            </div>
        )
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        )
    }
}

class Action extends React.Component {
    handlePick() {
        alert('handlePick')
    }
    render() {
        return (
            <div>
                <button onClick={this.handlePick}>What should I do </button>
            </div>
        )
    }
}

class Options extends React.Component {
    handleRemoveAll() {
        alert('Remove Option')
    }
    render() {
        return(
            <div>
                <button onClick={this.handleRemoveAll}>Remove All</button>
                {
                    this.props.options.map((option) => <Option key={option} optionText={option}/>)
                }
                
            </div>
        )
    }
}

class Option extends React.Component {
    render() {
        return(
            <div>
                Option: {this.props.optionText}
            </div>
        )
    }
}

class AddOption extends React.Component {
    handleAddOption(e) {
        e.preventDefault()

        const option = e.target.elements.option.value.trim()

        if (option) {
            alert(option)
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input type='text' name='option' />
                    <button>Add Option</button>
                </form>
            </div>
        )
    }
}

ReactDOM.render(<ThingsToDoApp />, document.getElementById('app'))