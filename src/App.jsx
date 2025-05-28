import './App.css';
import { useState } from 'react';

function App() {
  const [value , setValue] = useState('Text in input');



  return (
    <div className="App">
      
      <input 
      type='text' 
      placeholder='Type your text here'
      value={value}
      onChange={event => setValue(event.target.value)} />
      <hr />
      {value}
    </div>
  );
}

export default App;
