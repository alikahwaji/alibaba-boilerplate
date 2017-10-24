class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>Things to do</h1>
                <h2>Put your plans in the app</h2>
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
                <h2>Otions Components here</h2>
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
const jsx = (
    <div>
        <Header />
        <Action />
        <Options />
        <AddOption />
    </div>
)

ReactDOM.render(jsx, document.getElementById('app'))