import { useState } from 'react';
import './App.css';
import Counter from './Counter';

function App() {
  const [counts, setCounts] = useState([1, 4, 3]);

  const updateCount = (index, delta) => {
    const newCounts = [...counts]; 
    const newValue = newCounts[index] + delta;
    
    // Prevent values from going below 0 or above 10
    if (newValue >= 0 && newValue <= 10) {
      newCounts[index] = newValue;
      setCounts(newCounts);
    }
  };

  const resetCounts = () => {
    setCounts([0, 0, 0]); // Reset all counters to 0
  };

  const addCounter = () => {
    setCounts([...counts, 0]);
  }

  const removeCounter = (index) => {
    const newCounts = [...counts];
    newCounts.splice(index,1);
    setCounts(newCounts);
  }

  return (
    <div className="App">
      <h2>Total Count: {counts.reduce((sum, value) => sum + value, 0)}</h2>
      {counts.map((value, index) => (
        <Counter
          key={index}
          label={`Counter ${index + 1}`}
          value={value}
          increment={() => updateCount(index, 1)}
          decrement={() => updateCount(index, -1)}
          remove={() => removeCounter(index)}
        />
      ))}

      <button onClick={addCounter}>➕ Add Counter</button>

      <button onClick={resetCounts}>Reset All</button>
    </div>
  );
}

export default App;
