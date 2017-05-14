/**
 * Created by Amir on 9/5/17.
 */

/*
* Sample Unit Test
* */

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
