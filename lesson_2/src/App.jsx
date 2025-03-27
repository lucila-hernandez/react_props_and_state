import './App.css';
import Counter from './Counter'

function App() {
  return (
    <div className='App'>
      <Counter label="Apples" value={1} />
      <Counter label="Oranges" value={3} />
    </div>
  );
}

export default App;