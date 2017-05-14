/**
 * Created by Amir on 9/5/17.
 */

/*
 * Import packages and components
 * */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './template/layouts/App';

/*
* Import all style and handel with webpack
* */
import './style/index.scss';

/*
* Register App in root DOM
* */
ReactDOM.render(
    <App />,
    document.getElementById('root')
);