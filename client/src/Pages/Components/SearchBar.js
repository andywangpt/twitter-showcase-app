import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import TweetCard from "./TweetCard";

function SearchBar({
   tweets,
	setTweets,
	searchValue,
	setSearchValue,
	setSearchType,
	searchType,
}) {
	const [userInput, setUserInput] = useState("");

	const url = "/api/tweets";
	const params = {
		search_value: searchValue,
		search_type: searchType,
	};

	useEffect(() => {
		if (searchValue) {
			axios
            .get(url, { params })
            .then((res) => console.log("Data Sent - SearchBar.js Line 24"))  
            .then((data) => {setTweets(data)})
				.catch((err) => console.log("didn't send - SearchBar.js Line 25"));
		}
	}, [params]);

	const handleInputChange = (e) => {
		setUserInput(e.target.value);
	};

	function searchUserButton(e) {
		e.preventDefault();
		setSearchValue(userInput);
		setSearchType("user");
	}

	function searchContentButton(e) {
		e.preventDefault();
		setSearchValue(userInput);
		setSearchType("content");
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
            <TweetCard tweets={tweets} />
         </div>
		</>
	);
}

export default SearchBar;
