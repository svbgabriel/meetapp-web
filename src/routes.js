import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import Details from './pages/Details';
import Profile from './pages/Profile';
import Meetup from './pages/Meetup';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={SignIn} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/details" exact component={Details} />
        <Route path="/profile" exact component={Profile} />
        <Route path="/meetup" exact component={Meetup} />
      </Switch>
    </BrowserRouter>
  );
}
