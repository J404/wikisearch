import React from 'react';
import './App.css';

// Components
import Search from './search/Search';

interface APIResults {
  query: Query;
}

interface Query {
  searchinfo: object;
  search: SearchResult[];
}

interface SearchResult {
  title: string;
  snippet: string;
}

function App() {
  const handleInput = async (query: string): Promise<void> => {
    const response = await fetch(`http://localhost:5000/search/${query}`);
    const results: APIResults = await response.json();
    const searchResults = results.query.search;

    for (let searchResult of searchResults) {
      console.log(searchResult.title);
    }
  }

  return (
    <div className="App">
      <h2>Wiki Search!</h2>
      <Search handleInput={handleInput}/>
    </div>
  );
}

export default App;