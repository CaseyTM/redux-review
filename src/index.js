import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
// remember React and Redux do not communicate, they are separate libraries
// we need react-redux to handle the communication, wrap the provider component around app
import {Provider} from 'react-redux';
// get createStore method from redux, will use it to instantiate the STORE object, which will hold all
// reducers and this will be a prop of Provider
import {createStore} from 'redux';
import reducers from './reducers/index'

const theStore = createStore(reducers);

ReactDOM.render(
	<Provider store={theStore}>
		<App />
	</Provider>,
	document.getElementById('root')
);
