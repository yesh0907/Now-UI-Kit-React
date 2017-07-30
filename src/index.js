import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
require('bootstrap');
require('bootstrap-switch');
require('nouislider');
require('bootstrap-datepicker');
require('./now-ui-kit');

import App from './components/App';
import './styles/index.scss';

// Render the main component into the dom
ReactDOM.render(<App />, document.getElementById('app'));
