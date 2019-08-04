import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import { isAuthenticated } from "./services/auth";

import Header from './components/Header'
import Feed from './components/Feed'
import Login from './components/Login'
import Register from './components/Register'
import PetDetail from './components/PetDetail'

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? <Component {...props} /> : <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
    }
  />
);

const Routes = () => (
  <BrowserRouter>
    <Header/>
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route path="/cadastro" component={Register} />
      {/* <PrivateRoute path="/" component={() => <h1>App</h1>} /> */}
      <Route path="/pet/:petSlug" component={PetDetail} />
      <Route exact path="/" component={Feed} />
      <Route exact path="/busca/:searchTerm?" component={Feed} />
      <Route path="*" component={() => <h1>Page not found</h1>} />
    </Switch>
  </BrowserRouter>
);

export default Routes;