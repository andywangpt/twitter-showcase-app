import './App.css';
import { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import './Components/SearchPage.js';
import './Components/RandomTweetsPage.js';


import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from './Pages/Home'
import RandomTweet from './Pages/RandomTweet';
import SearchTweet from './Pages/SearchTweet';
import ErrorPage from './Pages/ErrorPage';


function App() {
  useEffect(() => {
    fetch("api/name")
      .then((res) => res.json())
      .then((data) => console.log(data))
  }, [])

  return (
    <>
    <Router>
      <nav>
        <Link to='/home' > Home   </Link>
        <Link to='/searchtweet' > Search Tweet   </Link>
        <Link to='randomtweet' > Random Tweet   </Link>
      </nav>
      <Routes>
        <Route path='/home' element={<Home />}/>
        <Route path='/randomtweet' element={<RandomTweet />}/>
        <Route path='/searchtweet' element={<SearchTweet />}/>
        <Route path='*' element={<ErrorPage />}/>
      </Routes>
    </Router>
    <div className='footer'>Footer</div>     
    </>
  );
}

export default App;
