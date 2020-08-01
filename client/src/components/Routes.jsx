import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Home from './pages/Home';

import Register from './users/Register';
import Login from './sessions/Login';
import Logout from './sessions/Logout';

import Tours from './tours/Index';
import NewTour from './tours/New';
import EditTour from './tours/Edit';
import { Fragment } from "react";

function Routes ({user, setUser}) {
  return (
    <Switch>
      <Route exact path="/" render={
        renderProps => <Home
          {...renderProps}
          user={user}
        />
      }/>
      <Route exact path="/register" render={
        renderProps => <Register
          {...renderProps}
          setUser={setUser}
        />
      }/>
      <Route exact path="/login" render={
        renderProps => <Login
          {...renderProps}
          setUser={setUser}
        />
      }/>
      <Route exact path="/logout" render={
        renderProps => <Logout
          {...renderProps}
          setUser={setUser}
        />
      }/>
      
      {
        /*
          Tricked you!
          The routes have been completed to provide a better user experience.
          HOWEVER!!!

          In your own words, please explain what is happening in the logic below.
          ANSWER HERE:

         React exact path is to create an exact router path. In this case ,
          we have a lots of same name jsx files in differnet folders of our 
          components folder. we have edit and new under this tours components.
           So in order to routes this files properly we use Route exact path.
         The exact parameter helps to  disables the partial matching for a 
         route and makes sure that it only returns the route if the path
          is an exact match to the current url.

        */
      }
      <Route exact path="/tours" render={
        props => user ? (
          <Tours {...props} user={user} />
        ) : (
          <Redirect to="/"/>
        )
      }/>
      <Route exact path="/tours/new" render={
        props => user ? (
          <NewTour {...props} />
        ) : (
          <Redirect to="/"/>
        )
      }/>
      <Route exact path="/tours/edit" render={
        props => user ? (
          <EditTour {...props} />
        ) : (
          <Redirect to="/"/>
        )
      }/>
    </Switch>
  );
}

export default Routes;