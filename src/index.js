import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import './index.scss';
import 'semantic-ui-css/semantic.min.css';
import Entry from './entry';

ReactDOM.render(
  <Provider store={store}>
    <Entry />
  </Provider>,
  document.getElementById('root')
);
