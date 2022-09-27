import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import logo512 from "../Assets/logo512.png";
import icons8love48 from "../Assets/icons8love48.png";
import icons8retweet from "../Assets/icons8retweet.png";
import "../Pages/SearchTweet.css";

function SearchTweet() {
  let navigate = useNavigate();
  let { username } = useParams;

  const [userInput, setUserInput] = useState("");
  //const [searchValue, setSearchValue] = useState('')
  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  function searchButton() {
    //setSearchValue(userInput)
  }

  return (
    <div className="container-fluid d-flex flex-column align-items-center justify-content-center">
      <div className="row">
        <h1>Search Tweet for {username}</h1>
        <button
          onClick={() => {
            navigate("/home");
          }}
        >
          change to home page
        </button>
      </div>

      {/*--- Search Bar -------------------------------------- */}
      <div id="search-bar" className="row w-50 mt-4 pt-4 mb-4 pt-4">
        <input
          className="col-6"
          type="text"
          value={userInput}
          onChange={handleInputChange}
          placeholder="search for tweets"
        />
        <button className="btn-dark col-3" onClick={searchButton}>
          Search By User
        </button>
        <button className="btn-dark col-3" onClick={searchButton}>
          Search By User
        </button>
      </div>

      {/* CARD BODY */}
      <div className="card w-50 mt-4">
        <div className="row">
          <div className="col-md-2">
            <img
              src={logo512}
              className="logo"
              alt="logo"
            />
          </div>
          <div className="col-md-2">Spider-man @SpiderMan</div>
          <div className="col-lg-8">853 Heart Symbol 105 Retweet Symbol</div>
        </div>

        <div className="row">Tweet placeholder</div>
        <div className="row">Media placeholder</div>
        <div className="row">Date/time placeholder</div>
      </div>
    </div>
  );
}

export default SearchTweet;

// add search bar - search by user or content
// tweet container
// - heart icon
// - retweet icon

//<a target="_blank" href="https://icons8.com/icon/19411/love">Love</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
//<a target="_blank" href="https://icons8.com/icon/Mjt9Tkm04cgv/love">Love</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
//<a target="_blank" href="https://icons8.com/icon/20733/retweet">Retweet</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>

/*

<div className='card w-50 mt-4'> {/* CARD BODY *
             
                <div className='card-header'>    {/* CARD HEADER *
                    <div className="row">
                        <div className="col-md-2">SpiderMan Icon Goes Here
                    </div>
                    <div className="col-md-2">Spider-man @SpiderMan</div>
                        <div className="col-md-2">
                            853 Heart Symbol 
                            105 Retweet Symbol
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-2'>
                            <img src={logo512} className='logo' alt='logo'/>
                        </div>
                    
                    <div className='col'>
                            {/*headerRow1*
                            <div className='row h-50'>
                        <h5 className=' col-6'> UserName 1 </h5>
                            <img 
                                src={icons8love48} 
                                className='icon'  
                                alt='like'
                            />        
                        </div>
                        {/*headerRow2*    
                        <div className='row h-50'>
                            <div className='row'>
                                <h5 className=' col-6'> @UserName 2 </h5>
                                <div className='col-5'>
                                    <img
                                        src={icons8retweet} 
                                        className='icon' 
                                        alt='retweet'
                                    />
                                </div>                       
                            </div>
                            </div>
                        </div>
                    </div>
                </div>

                <p className='card-text'>Lorem ipsum dolor</p>
                <button className='btn btn-dark'>Button One</button>
            </div >
                
                */
