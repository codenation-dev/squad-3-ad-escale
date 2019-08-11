/* eslint-disable react/prop-types */
import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import { isAuthenticated } from './services/auth'

import Header from './components/Header'
import Feed from './components/Feed'
import Login from './components/Login'
import Register from './components/Register'
import PetDetail from './components/PetDetail'
import User from './components/User'
import CreatePet from './components/CreatePet'
import MyPets from './components/MyPets'

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? <Component {...props} /> : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    }
  />
)

const Routes = () => (
  <BrowserRouter>
    <Header/>
    <div className="router-container">
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route path="/cadastro" component={Register} />
        <PrivateRoute path="/meus-dados" component={User} />
        <PrivateRoute path="/meus-pets" component={MyPets} />
        <PrivateRoute exact path="/pets/cadastrar" component={CreatePet} />
        <Route path="/pets/:petSlug" component={PetDetail} />
        <Route exact path="/" component={Feed} />
        <Route exact path="/busca/:searchTerm?" component={Feed} />
        <Route path="*" component={() => <h1>Page not found</h1>} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default Routes
