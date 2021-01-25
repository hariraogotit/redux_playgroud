# Simple Redux App

store is myStore which is the Redux that is exposed using Provider in main index.js  to the entire App 

Actions 
Reducers
Dispatcher
Store

Above four play the main role in Redux. A simple example below. 
//STORE is imported first
import {createStore} from 'redux';

//ACTION
const increment = () => {
  return {
    type: 'INCREMENT'
  }
}

const decrement = () => {
  return {
    type: 'DECREMENT'
  }
}
//REDUCER
const counter = (state = 0, action) => {
  switch(action.type){
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
  }
}

//STORE
let store = createStore(counter);

//DISPLAY IN THE CONSOLE
store.subscribe(() => console.log(store.getState()));

//DISPATCH
store.dispatch(increment());
store.dispatch(decrement());

