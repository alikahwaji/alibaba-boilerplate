import React from 'react'
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom'

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
  404 - <Link to='/'>Go Home</Link>
  </div>
)

const Header = () => (
  <header>
    <h1>Spend Track</h1>
    <NavLink to='/' activeClassName='is-active' exact={true}>Home</NavLink>
    <NavLink to='/create' activeClassName='is-active'>Create</NavLink>
    <NavLink to='/edit' activeClassName='is-active'>Edit</NavLink>
    <NavLink to='/help' activeClassName='is-active'>Help</NavLink>
  </header>
)

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path='/' component={DashboardPage} exact={true}/>
        <Route path='/create' component={AddSpendPage} />
        <Route path='/edit' component={EditSpendPage}/>
        <Route path='/help' component={HelpPage} />
        <Route component={NotFoundPage}/>
      </Switch>
    </div>

  </BrowserRouter>

)

export default AppRouter
