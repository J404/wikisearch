import React from 'react';
import './App.css';

// Components
import Search from './search/Search';

function App() {
  const handleInput = (query: string): void => {
    console.log(`Got input ${query}`);
  }

  return (
    <div className="App">
      <h2>Wiki Search!</h2>
      <Search handleInput={handleInput}/>
    </div>
  );
}

export default App;