import { useState } from 'react';
import './App.css';
import Counter from './Counter';

function App() {
  const [counts, setCounts] = useState([1, 4, 3]);

  return (
    <div className="App">
      {counts.map((value, index) => (
        <Counter key={index} label={`Counter ${index + 1}`} value={value} />
      ))}
    </div>
  );
}

export default App;