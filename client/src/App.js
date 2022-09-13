import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from './Components/NavBar';
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
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/randomtweet' element={<RandomTweet />}/>
        <Route path='/searchtweet' element={<SearchTweet />}/>
        <Route path='*' element={<ErrorPage />}/>
      </Routes>
    </Router> 
    </>
  );
}

export default App;
