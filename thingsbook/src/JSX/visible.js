class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props)
        this.handleToggleVisibility =this.handleToggleVisibility.bind(this)
        this.state = {
            visibility: false
        }

    }
    handleToggleVisibility() {
       this.setState((prevState) => {
        return {
            visibility: !prevState.visibility
        }

       })
    
        }
        render() {
            return(
                <div>
                    <h1>Visibility Toggle</h1>
                    <button onClick={this.handleToggleVisibility}>
                        {this.state.visibility ? 'Hide detalis' : 'Show detalis'}
                    </button>
                    {this.state.visibility && (
                        <div>
                            <p>These are some detalis</p>
                        </div>
                    )}
                </div>
                
            )
        }
}



ReactDOM.render(<VisibilityToggle />, document.getElementById('app'))





// let visibility = false

// const toggleVisibility = () => {
//     visibility = !visibility
//     render()
// }
// const render = () => {
//     const jsx = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={toggleVisibility}>
//                 {visibility ? 'Hide detalis' : 'Show detalis'}
//             </button>
//             {visibility && (
//                 <div>
//                 <p>These are some detalis</p>
//                 </div>
//             )}
//         </div>

//     )

//     ReactDOM.render(jsx, document.getElementById('app'))
// }

// render()

