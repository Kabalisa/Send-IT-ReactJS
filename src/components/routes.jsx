import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './home.jsx';
import Signup from './signup.jsx';
import Login from './login.jsx';
import Profile from './profile.jsx';

const Routes = () => {
  return (
    <Switch>
      <Route path='/signup' exact component={Signup} />
      <Route path='/login' exact component={Login} />
      <Route path='/profile' exact component={Profile} />
      <Route path='/' exact component={Home} />
    </Switch>
  );
};

export default Routes;
