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
			<h2 className="m-3 p-3 display-4 bg-dark text-light rounded-3">
				Search Tweets by User or Content
			</h2>

			<div id="search-bar" className="row w-50 m-1 pt-1">
				<input
					className="col-6 border-light rounded-3"
					type="text"
					value={userInput}
					onChange={handleInputChange}
					placeholder="Search for Tweets"
				/>
				<button
					className="btn-dark col-3 border-light rounded-3"
					onClick={searchButton}
				>
					Search By User
				</button>
				<button
					className="btn-dark col-3 border-light rounded-3"
					onClick={searchButton}
				>
					Search By User
				</button>
			</div>
		</>
	);
}

export default SearchBar;
