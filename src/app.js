import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Route} from 'react-router-dom'
import 'normalize.css/normalize.css'
import './styles/styles.scss'

const DashboardPage = () => (
  <div>
  This is my boilerplate
  </div>
)

const AddSpendPage = () => (
  <div>
  This is my add spending component
  </div>
)

const EditSpendPage = () => (
  <div>
  This is my add editing component
  </div>
)

const HelpPage = () => (
  <div>
  This is my help component
  </div>
)

const routes = (
  <BrowserRouter>
    <div>
      <Route path='/' component={DashboardPage} exact={true}/>
      <Route path='/create' component={AddSpendPage} />
      <Route path='/edit' component={EditSpendPage}/>
      <Route path='/help' component={HelpPage} />
    </div>

  </BrowserRouter>
)
ReactDOM.render(routes, document.getElementById('app'))
