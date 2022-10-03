import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";


function SearchBar() {

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
		<>
			<h4 className="m-3 p-3 w-75 display-5 bg-dark text-light rounded-3 align-self-center">
				Search Tweets by User or Content
			</h4>

			<div id="search-bar" className="row w-75 m-1 pt-1">
				<input
					className="col-8 border-light rounded-3"
					type="text"
					value={userInput}
					onChange={handleInputChange}
					placeholder="Search for Tweets"
				/>
				<button
					className="btn-dark col-2 border-light rounded-3"
					onClick={searchButton}
				>
					Search By User
				</button>
				<button
					className="btn-dark col-2 border-light rounded-3"
					onClick={searchButton}
				>
					Search By Content
				</button>
			</div>
		</>
	);
}

export default SearchBar;

/*
git init (only do once)

git add .
git status
git commit -m "commit msg"
git push origin main

*/