import React, { useState, useEffect } from "react";

import logo512 from "./logo512.png";
import icons8love48 from "./icons8love48.png";
import icons8retweet from "./icons8retweet.png";

function TweetCard() {
   const [tweets, setTweets] = useState([]);
   let tweetList = []

	useEffect(() => {
		fetch("api/tweets")
			.then((res) => res.json())
         .then((data) => {
            tweetList = data
				setTweets(data);
				console.log("success");
				console.log(tweetList[0].text);
			});
	}, []);

	return (
		<>
			<div id="tweet-container" className="row w-100 bg-light rounded m-2 mb-3">
				<div className="col-md-6">
					<div id="user-names" className="float-left w-100">
						<div>
							<img src={logo512} className="logo float-start" alt="logo" />
							<div className="float-start ml-3 mt-2">
								<div></div>
								<div></div>
							</div>
						</div>
					</div>
				</div>

				<div className="col-md-6">
					<div className="w-100 h-100">
						<div className="float-end" style={{ clear: "both" }}>
							<span className="">#</span>
							<img src={icons8love48} className="icon" alt="like" />
						</div>
						<div className="float-end" style={{ clear: "both" }}>
							<span>#</span>
							<img src={icons8retweet} className="icon" alt="retweet" />
						</div>
					</div>
				</div>

            <div className="col-md-12">{tweets[0].text}</div>

				<div id="media-container" className="col-md-12">
					Media
				</div>

				<div className="card-footer text-muted row px-3 py-2">
					<div className="time-elements col-3"></div>・
					<div className="time-elements col-2">10:10AM</div>・
					<div className="time-elements col-3">North America</div>
				</div>
			</div>
		</>
	);
}

/*
{tweets[0].text}

*/

export default TweetCard;
