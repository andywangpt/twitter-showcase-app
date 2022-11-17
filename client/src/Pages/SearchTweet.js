import React, { useState, useEffect } from "react";
//import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Pages/SearchTweet.css";
import TweetCard from "./Components/TweetCard";
import SearchBar from "./Components/SearchBar";
import SearchFooter from "./Components/SearchFooter";

function SearchTweet() {
	//const [tweets, setTweets] = useState([]);
	//const tweetText = tweets[1].text;
	//console.log(tweets);

	//useEffect(() => {
	//	fetch("api/tweets")
	//		.then((res) => res.json())
	//		.then((data) => {
	//			//console.log(data[0].text);
	//			setTweets(data);
	//			console.log("success");
	//		});
	//}, []);

	//console.log(tweets[0]);

	return (
		<>
			<div className="bg container">
				<div className="container-fluid d-flex w-75">
					<div className="search-container container d-flex mw-100 mt-4 p-3 flex-column align-items-center rounded-5">
						<SearchBar />
						<TweetCard />
					</div>
				</div>
				<SearchFooter />
			</div>
		</>
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
