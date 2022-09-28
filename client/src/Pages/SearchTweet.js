import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import logo512 from "../Assets/logo512.png";
import icons8love48 from "../Assets/icons8love48.png";
import icons8retweet from "../Assets/icons8retweet.png";

import "../Pages/SearchTweet.css";
import TweetCard from "./Components/TweetCard";

function SearchTweet() {
  //let navigate = useNavigate();
  //let { username } = useParams;

  const [userInput, setUserInput] = useState("");
  //const [searchValue, setSearchValue] = useState('')
  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  function searchButton() {
    //setSearchValue(userInput)
  }

  return (
    <div className="container-fluid d-flex flex-column align-items-center justify-content-center bg-secondary">
      <h2 className="m-3 p-3 display-4 bg-dark text-light">
        Search Tweets by User or Content
      </h2>
      {/*--- Search Bar -------------------------------------- */}
      <div id="search-bar" className="row w-50 m-1 pt-1">
        <input
          className="col-6 border-light rounded-3"
          type="text"
          value={userInput}
          onChange={handleInputChange}
          placeholder="Search for Tweets"
        />
        <button
          className="btn-dark col-3 border-light rounded-3"
          onClick={searchButton}
        >
          Search By User
        </button>
        <button
          className="btn-dark col-3 border-light rounded-3"
          onClick={searchButton}
        >
          Search By User
        </button>
      </div>

      {TweetCard}

      {/* CARD ----------------------------------------------------*/}
      <div
        id="card-container"
        className="card w-50 m-3 p-1 border-light rounded-lg"
      >
        <div id="card-header" className="card-title row d-flex flex-wrap mb-0">
          <div className="col-sm-2">
            <img src={logo512} className="logo" alt="logo" />
          </div>

          {/* USER NAME  ----------------------------------------------------*/}
          <div
            className="col-sm-6 d-flex align-items-flex-start flex-wrap"
            id="user-names"
          >
            <div>spiderman</div>
            <div>@spiderman</div>
          </div>

          <div id="icon-container" className="col-sm-4 align-items-end">
            <div className="row">
              #likes
              <img src={icons8love48} className="icon" alt="like" />
            </div>
            <div className="row">
              #retweets
              <img src={icons8retweet} className="icon" alt="retweet" />
            </div>
          </div>
        </div>

        <div className="card-body m-0 px-3 py-1 align-self-baseline">
          <div id="tweet-container" className="row">
            Tweet placeholder
          </div>
          <div id="media-container" className="row">
            Media placeholder
          </div>
        </div>

        <div className="card-footer text-muted row no-gutters">
          <div className="time-elements col-2">9/27/2022</div>・
          <div className="time-elements col-2">10:10AM</div>・
          <div className="time-elements col-3">North America</div>
        </div>
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
