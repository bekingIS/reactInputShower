import './App.css';
import { useState } from 'react';

function App() {
  const [ count, setCount] = useState(0);



  return (
    <div className="App">
      <h1>Count: {count}</h1>
      <button className='btn' onClick={() => setCount(count+1)}>+</button>
      <button className='btn' onClick={() => setCount(count-1)}>-</button>
    </div>
  );
}

export default App;
