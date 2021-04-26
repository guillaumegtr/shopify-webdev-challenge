import React from 'react';
import Home from './routes/home';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

const Entry = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home" component={Home} />
        {/* other route redirects to home */}
        <Route path="/*" render={() => <Redirect to="/home" />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Entry;
