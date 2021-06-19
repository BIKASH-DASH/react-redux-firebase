import React, { useState} from 'react';
import './App.css';
import Ninjas from './Ninjas'
import AddNinja from './AddNinja'
import _ from 'lodash'

function App() {
  const [ninjas, setninjas] = useState([
    { name: 'viaksh', age: '22', path: 'red' },
    { name: 'raja', age: '21', path: 'green' },
    { name: 'bikash', age: '25', path: 'yellow' }
  ])
  const hendelFormData = (data) =>{
    let arry =[...ninjas,data];
    setninjas(arry)
  }

  
  return (
    <div className="App">
      <h1>App</h1>
      <Ninjas list={ninjas} />
      <AddNinja formdata={hendelFormData}/>
    </div>
  );
}

export default App;
