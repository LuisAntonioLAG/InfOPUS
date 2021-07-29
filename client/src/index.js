import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'; 
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import App from './App.js';
import reducers from './reducers'


const store = createStore(reducers, compose(applyMiddleware(thunk)))


ReactDom.render( 
    <BrowserRouter> 
    <Provider store={store}>
        <App/>
    </Provider> 
    </BrowserRouter> 
    , document.getElementById('root')
);