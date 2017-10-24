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
    render() {
        return (
            <div>
                <button>What should I do </button>
            </div>
        )
    }
}

class Options extends React.Component {
    render() {
        return(
            <div>
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
    render() {
        return (
            <div>
                <h2>Add button here</h2>
            </div>
        )
    }
}

ReactDOM.render(<ThingsToDoApp />, document.getElementById('app'))