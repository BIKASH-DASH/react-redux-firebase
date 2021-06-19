import React from 'react';
import './App.css';
import Ninjas from './Ninjas'

function App() {
  const state = {
    ninjas: [
      { name: 'viaksh', age: '22', path: 'red' },
      { name: 'raja', age: '21', path: 'green' },
      { name: 'bikash', age: '25', path: 'yellow' }
    ]
  }
  return (
    <div className="App">
      <h1>App</h1>
      <Ninjas list={state.ninjas} />
    </div>
  );
}

export default App;
