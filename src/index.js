import React from 'react';
import ReactDOM from 'react-dom';
import './part4/style.css';
import App from './part11-2/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

// import {createStore} from 'redux';

// const reducer = (state, action) => {
// 	switch(action.type){
// 		case 'ADD':
// 			state += action.payload;
// 			break;
// 		case 'SUBSTRACT':
// 			state -= action.payload;
// 			break;
// 	}
// 	return state;
// }

// let state = 10;

// const store = createStore(reducer, state);

// store.subscribe(()=>{
// 	console.log('store updated: '+store.getState());
// })

// store.dispatch({
// 	type: 'ADD',
// 	payload: 10
// })

// store.dispatch({
// 	type: 'ADD',
// 	payload: 10
// })

// store.dispatch({
// 	type: 'SUBSTRACT',
// 	payload: 10
// })