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
			<h4 className="row m-1 p-2 w-75 display-5 font-weight-bold bg-dark text-white rounded-3 justify-content-center">
				Search Tweets by User or Content
			</h4>

			<div id="search-bar" className="row w-75 m-1 mb-0 pt-1 pb-0">
				<input
					className="col-6 border-light rounded-3"
					type="text"
					value={userInput}
					onChange={handleInputChange}
					placeholder="Search for Tweets"
				/>
				<button
					className="btn-dark col-3 border-light p-1 rounded-3"
					onClick={searchButton}
				>
					Search By User
				</button>
				<button
					className="btn-dark col-3 border-light p-1 rounded-3"
					onClick={searchButton}
				>
					Search By Content
				</button>
			</div>
		</>
	);
}

export default SearchBar;