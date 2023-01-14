import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Pages/SearchTweet.css";
import SearchBar from "./Components/SearchBar";
import SearchFooter from "./Components/SearchFooter";

function SearchPage() {
	const [tweets, setTweets] = useState([]);

	const [searchValue, setSearchValue] = useState("");
	const [searchType, setSearchType] = useState("");

	useEffect(() => {
		getData();
	}, [searchValue, searchType]);

	function getData() {
		fetch("api/tweets")
			.then((res) => res.json())
			.then((data) => {
				setTweets(data);
			})
         .catch(() => {
            console.log(tweets)
            return <></>;
			});
	}

	if (tweets.length === 0) {
		return <></>;
	}

	return (
		<>
			<div className="bg container">
				<div className="container-fluid d-flex w-75">
					<div className="search-container container d-flex mw-100 mt-4 p-3 flex-column align-items-center rounded-5">
						<SearchBar
							tweets={tweets}
							setTweets={setTweets}
							searchValue={searchValue}
							setSearchValue={setSearchValue}
							setSearchType={setSearchType}
							searchType={searchType}
						/>
					</div>
				</div>
				<SearchFooter />
			</div>
		</>
	);
}

export default SearchPage;

// add search bar - search by user or content
// tweet container
// - heart icon
// - retweet icon

//<a target="_blank" href="https://icons8.com/icon/19411/love">Love</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
//<a target="_blank" href="https://icons8.com/icon/Mjt9Tkm04cgv/love">Love</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
//<a target="_blank" href="https://icons8.com/icon/20733/retweet">Retweet</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
