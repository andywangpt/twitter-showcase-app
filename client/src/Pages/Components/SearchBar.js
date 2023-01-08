import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import TweetCard from "./TweetCard";
import Error from "./Error";

function SearchBar({
	tweets,
	setTweets,
	searchValue,
	setSearchValue,
	setSearchType,
	searchType,
}) {
	const [userInput, setUserInput] = useState("");
	const [runSearch, setRunSearch] = useState(false);

	const url = "/api/tweets";
	const params = {
		search_value: searchValue,
		search_type: searchType,
	};

	useEffect(() => {
		if (searchValue && runSearch) {
			axios
				.get(url, { params })
				// .then((res) => console.log("Data Sent - SearchBar.js Line 24"))
				.then((data) => {
					//console.log(data);
					setTweets(data.data);
					setRunSearch(false);

					if (tweets == "undefined" || tweets.length === 0) {
						return;
					}
				})
				.catch((err) => {
					console.log("didn't send - SearchBar.js Line 35");
					console.log(err);
				});
		}

		console.log("useEffect axios.get(url, params)");
	}, [params]);

	const handleInputChange = (e) => {
		setUserInput(e.target.value);
	};

	function searchUserButton(e) {
		e.preventDefault();
		setSearchValue(userInput);
		setSearchType("user");
		setRunSearch(true);
	}

	function searchContentButton(e) {
		e.preventDefault();
		setSearchValue(userInput);
		setSearchType("content");
		setRunSearch(true);
	}

	return (
		<>
			<h4 className="row m-1 p-2 w-100 display-7 font-weight-bold bg-dark text-white rounded-3 justify-content-center">
				Search Tweets by User or Content
			</h4>

			<div id="search-bar" className="row w-100 m-1 mb-2 pt-1 pb-1">
				<input
					className="col-6 border-light rounded-3"
					type="text"
					value={userInput}
					onChange={handleInputChange}
					placeholder="Search for Tweets"
				/>
				<button
					className="btn-dark col-3 border-light p-1 rounded-3"
					onClick={searchUserButton}
				>
					Search By User
				</button>
				<button
					className="btn-dark col-3 border-light p-1 rounded-3"
					onClick={searchContentButton}
				>
					Search By Content
				</button>
			</div>

			<div>
				{tweets.length > 0 ? (
					<TweetCard tweets={tweets} />
				) : (
               <Error />
               )
				}
			</div>
		</>
	);
}

export default SearchBar;
