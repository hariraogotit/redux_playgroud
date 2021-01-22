import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {increment, decrement, login, logout} from './actions';



function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Counter - {counter}</h1>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(login())}>Login</button>
      <button onClick={() => dispatch(logout())}>Logout</button>
      {isLogged ? <h3>This is a valuable information. You see this because you are logged in</h3> : ''} 
    </div>
  );
}

export default App;
