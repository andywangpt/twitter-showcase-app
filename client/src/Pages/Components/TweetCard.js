import React from "react";
//import logo512 from "../Assets/logo512.png";
//import icons8love48 from "../Assets/icons8love48.png";
//import icons8retweet from "../Assets/icons8retweet.png";

function TweetCard() {
  return (
    <>
      <div></div>
      id="card-container" className="card w-50 m-3 p-2 border-light rounded-lg">
      <div id="card-header" className="card-title row">
        <div className="col-sm-2"></div>

        <div className="col-sm-5" id="user-names">
          Spider-man @SpiderMan
        </div>

        <div className="card-body">
          <div id="tweet-container" className="row m-1">
            Tweet placeholder
          </div>
          <div id="media-container" className="row m-1">
            Media placeholder
          </div>
        </div>

        <div id="time-container" className="card-footer row m-1">
          Date/time placeholder
        </div>
      </div>
    </>
  );
}

export default TweetCard;
