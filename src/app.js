import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
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

const NotFoundPage = () => (
  <div>
  404!
  </div>
)

const routes = (
  <BrowserRouter>
    <Switch>
      <Route path='/' component={DashboardPage} exact={true}/>
      <Route path='/create' component={AddSpendPage} />
      <Route path='/edit' component={EditSpendPage}/>
      <Route path='/help' component={HelpPage} />
      <Route component={NotFoundPage}/>
    </Switch>

  </BrowserRouter>
)
ReactDOM.render(routes, document.getElementById('app'))
