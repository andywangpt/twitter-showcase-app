import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "../Pages/SearchTweet.css";
import TweetCard from "./Components/TweetCard";
import SearchBar from "./Components/SearchBar";

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
			<SearchBar />
			<TweetCard />
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
