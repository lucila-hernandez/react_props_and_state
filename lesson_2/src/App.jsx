import { useState } from 'react';
import './App.css';
import Counter from './Counter';

function App() {
  const [counts, setCounts] = useState([1, 4, 3]);

  const updateCount = (index, delta) => {
    const newCounts = [...counts]; 
    newCounts[index] += delta;
    setCounts(newCounts);
  };

  const totalCount = counts.reduce((sum, value) => sum + value, 0);

  return (
    <div className="App">
      <h2>Total Count: {totalCount}</h2>
      {counts.map((value, index) => (
        <Counter
          key={index}
          label={`Counter ${index + 1}`}
          value={value}
          increment={() => updateCount(index, 1)}
          decrement={() => updateCount(index, -1)}
        />
      ))}
    </div>
  );
}

export default App;