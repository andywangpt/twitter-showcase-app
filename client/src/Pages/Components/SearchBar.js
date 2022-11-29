import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const axios = require("axios").default;

function SearchBar() {
	//let navigate = useNavigate();
	//let { username } = useParams;

	const [userInput, setUserInput] = useState("");
	const [searchValue, setSearchValue] = useState("");

	const handleInputChange = (e) => {
		setUserInput(e.target.value);
		console.log(userInput);
	};

	useEffect(() => {
		axios.post("/ api / users", {
         searchTerm: { searchValue },
			})
			.then(function (response) {
				console.log(response);
			})
			.catch(function (error) {
				console.log(error);
			});
	}, [searchValue]);

	function searchUserButton() {
		setSearchValue(userInput);
		console.log(searchValue);
	}

	function searchContentButton() {
		setSearchValue(userInput);
		//send to server
		//server then term to search
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
		</>
	);
}

export default SearchBar;
