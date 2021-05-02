import React, { useEffect } from 'react';
import Home from './routes/home';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { initNomination } from './redux/actions/nominate';
import NominationsPretty from './routes/nominations-pretty';

const Entry = () => {
  const dispatch = useDispatch();

  const setupApp = () => {
    const nominations: IMovie[] =
      JSON.parse(localStorage.getItem('nominations')) || [];
    nominations.forEach((m) => {
      dispatch(initNomination(m));
    });
  };

  useEffect(() => {
    setupApp();
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/nominations" component={NominationsPretty} />
        {/* other route redirects to home */}
        <Route path="/*" render={() => <Redirect to="/home" />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Entry;
