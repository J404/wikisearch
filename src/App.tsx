import React, { useState } from 'react';
import './App.css';

// Components
import Search from './search/Search';
import Result from './result/Result';

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
  const [results, updateResults] = useState<SearchResult[]>([]);

  const handleInput = async (query: string): Promise<void> => {
    if (query.length === 0)
      return;

    const response = await fetch(`http://localhost:3000/search/${query}`);
    const results: APIResults = await response.json();
    const searchResults = results.query.search;

    updateResults(searchResults);
  }

  return (
    <div className="App">
      <h2>Wiki Search!</h2>
      <Search handleInput={handleInput}/>
      {results.length > 0 ? (
        results.map((searchResult, i) => 
          <Result key={i}
          title={searchResult.title}
          snippet={searchResult.snippet}/>
        )
      ) : (
        <p>No results!</p>
      )}
    </div>
  );
}

export default App;