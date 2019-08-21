import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';
import Dashboard from '~/pages/Dashboard';
import Details from '~/pages/Details';
import Profile from '~/pages/Profile';
import Meetup from '~/pages/Meetup';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/signup" exact component={SignUp} />
      <Route path="/dashboard" exact component={Dashboard} isPrivate />
      <Route path="/details/:id" exact component={Details} isPrivate />
      <Route path="/profile" exact component={Profile} isPrivate />
      <Route path="/meetup/:id" exact component={Meetup} isPrivate />
      <Route path="/meetup" exact component={Meetup} isPrivate />
    </Switch>
  );
}
