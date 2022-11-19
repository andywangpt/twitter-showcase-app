import React, {useState} from "react";
//import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Pages/SearchTweet.css";
import TweetCard from "./Components/TweetCard";
import SearchBar from "./Components/SearchBar";
import SearchFooter from "./Components/SearchFooter";

function SearchTweet() {
   const [userInput, setUserInput] = useState('')
   const [searchInput, setSearchInput] = useState('')

	return (
		<>
			<div className="bg container">
				<div className="container-fluid d-flex w-75">
					<div className="search-container container d-flex mw-100 mt-4 p-3 flex-column align-items-center rounded-5">
						<SearchBar />
						<TweetCard />
						<TweetCard />
						<TweetCard />
						<TweetCard />
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
