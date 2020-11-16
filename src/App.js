import './App.css';
import { useState } from 'react';
import List from './List'

function App() {
  const [search, setSearch] = useState('');
  const [list, setList] = useState([]);

  const handleSubmit = () => {
    setList([...list, search]);
    setSearch('')
  }

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  }

  return (
    <div className="App">
      <div className="App-header">
        <div>
            <h1 className="has-text-black is-size-1">To Do Test</h1>
            <div className="input-container">
              <input className="input" type="text" placeholder="Feed the 🐱" onChange={handleInputChange} value={search} />
              <button className="button is-link" id="submit" onClick={handleSubmit}> Submit</button>
            </div>
            <List list={list} />
        </div>
      </div>
    </div>
  );
}

export default App;
