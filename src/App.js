import React from "react";
import searchGlass from "./images/search.png";

function App() {
  return (
    <div className="App">
      <h1 id="main-heading">SNAPSHOT</h1>
      <div className="middle-section">
        <div className="search-center">
          <input type="text" name="search-field" id="search-field" placeholder="Search..." />
          <button type="text" name="search-btn" id="search-btn"><img src={searchGlass} alt="" id="search-btn-img" /></button>
        </div>
        <div className="option-btn-section">
          <button id="option-btn" className="modified-btn">Mountain</button>
          <button id="option-btn" className="modified-btn">Beaches</button>
          <button id="option-btn" className="modified-btn">Birds</button>
          <button id="option-btn" className="modified-btn">Food</button>
        </div>
      </div>
      <div className="github-link">
        <a href="https://www.github.com/purshottamxkumar/snapshot" target="_blank" rel="noopener noreferrer">Fork On Github</a>
      </div>
    </div>
  );
}

export default App;