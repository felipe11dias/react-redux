import React from 'react';
import './App.css';
import FormTask from './components/FormTask'
import List from './components/List';

function App() {
  return (
    <div className="App">
      <div>
          <List/>
      </div>

      <div>
        <FormTask/>
      </div>
    </div>
  );
}

export default App;
