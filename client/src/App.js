import './App.css';
import { BrowserRouter as Router, Routes } from 'react-router-dom';

import './Components/SearchPage.js';
import './Components/RandomTweetsPage.js'
import { useEffect } from "react";

function App() {

  useEffect(() => {
    fetch("api/name")
      .then((res) => res.json())
      .then((data) => console.log(data))
  }, [])

  return (
    <div className="App">
      <div className = "container">
        <nav>
            <ul>
                <li><a href='./Components/SearchPage.js'>Search</a></li>
                <li><a href='./Components/RandomTweetsPage.js'>Random Tweets</a></li>
            </ul>
        </nav>
      </div>

      <h1>New Twitter project</h1>


    </div>
  );
}

export default App;
