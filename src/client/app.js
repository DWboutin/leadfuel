import LeadFuel from './LeadFuel';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Router, Route } from 'react-router';
import { createMemoryHistory } from 'history';

import routes from '../routes';

import Application from '../components/Application.react';

$('.leadfuel').on('click', (e) => {

  LeadFuel.createApplication(() => {

    ReactDOM.render(
      <Router history={createMemoryHistory()}>{routes}</Router>,
      document.getElementById('leadfuel')
    );

  });

});