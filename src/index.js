import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducers from './reducers';
import App from './components/App';
 

ReactDOM.render(
//Provider component encloses the App component
//also we pass the reference of store to the provider via prop
<Provider store={createStore(reducers)}>
<App/>
</Provider>
, document.querySelector('#root'));