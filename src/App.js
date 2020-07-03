import React from 'react';
import './App.css';
import Login from './components/Login';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import { users } from './utils/_DATA.js';

const store = createStore(()=>{}, users)


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Login />
      </Provider>
      
    </div>
  );
}

export default App;
