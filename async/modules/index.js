import 'babel-core/polyfill';
import React from 'react';
import ReactDom from 'react-dom';
import Root from './containers/Root';

React.render(
  <Root />,
  document.getElementById('root')
);