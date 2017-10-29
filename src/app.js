import React from 'react'
import ReactDOM from 'react-dom'
import ThingsToDoApp from './components/ThingsToDo'

const Layout = (props) => {
  return (
    <div>
      <p>header</p>
      {props.children}
      <p>footer</p>
    </div>
  )
}

ReactDOM.render((
  <Layout>
    <div>
      <h1>Page title</h1>
      <p>This my Page</p>
    </div>
  </Layout>
), document.getElementById('app'))
