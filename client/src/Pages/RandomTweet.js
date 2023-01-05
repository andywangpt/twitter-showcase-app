import { Button } from "bootstrap";
import React, { useState, useEffect } from "react";

function RandomTweet() {
	const [getTweetFrom, setGetTweetFrom] = useState("");
	const [userId, setUserId] = useState("");

	function handleClick(e) {
		//e.preventDefault();

		const userChoice = e.target.value;
		console.log("userChoice ", userChoice);

		switch (userChoice) {
			case "embark":
				setGetTweetFrom("embark");
				setUserId("12345");
				break;
			case "finals":
				setGetTweetFrom("finals");
				setUserId("");
				break;
			case "battlefield":
				setGetTweetFrom("battlefield");
				setUserId("");
				break;
			case "dice":
				setGetTweetFrom("dice");
				setUserId("");
				break;
			case "electronicArts":
				setGetTweetFrom("electronicArts");
				setUserId("");
				break;
		}
		console.log(getTweetFrom, userId);
		return;
	}


	return (
		<>
			<div className="bg container-sm">
				<h2 className="container bg-dark text-white w-50 d-block text-center my-5 p-2 rounded">
					Random Tweet Page
				</h2>

				<div className="profile-cards flex-column container flex-wrap pb-3 w-50">
					<div className="container row d-flex align-items-center my-2 justify-content-between">
						<button
							className="mw-fit-content col-md-auto rounded-5 col mx-5"
							onClick={handleClick}
							value="embark"
						>
							<img
								className="logo rounded-circle mt-2"
								alt="embark logo"
                        src="https://pbs.twimg.com/profile_images/1116321108876320768/AuFVOU38_400x400.png"
                        value='embark'
							></img>
							<p value='embark' className="mb-0 px-1">Embark Studios</p>
							<p value='embark' >@EmbarkStudios</p>
						</button>
					</div>

					<div>
						<button
							className="mw-fit-content col-md-auto rounded-5 mx-5"
							value="finals"
						>
							<div>
								<img
									className="logo rounded-circle mt-2"
									alt="finals logo"
									src="https://pbs.twimg.com/profile_images/1562165525098250242/Z8oO1S4m_400x400.jpg"
								></img>
								<p className="mb-0 px-1">THE FINALS</p>
								<p>@reachthefinals</p>
							</div>
						</button>
					</div>

					<div className="container row d-flex justify-content-center">
						<button className="col-md-auto rounded-5" value="battlefield">
							<div>
								<img
									className="logo rounded-circle mt-2"
									alt="battlefield logo"
									src="https://pbs.twimg.com/profile_images/1603420486167412736/n8YZpdzH_400x400.jpg"
								></img>
								<p className="mb-0 px-4">Battlefield</p>
								<p>@Battlefield</p>
							</div>
						</button>
					</div>

					<div className="container row d-flex justify-content-between col-md-auto align-items-center mx-5">
						<button className="col-md-auto rounded-5" value="electronicArts">
							<div>
								<img
									className="logo rounded-circle mt-2"
									alt="electronic arts logo"
									src="https://pbs.twimg.com/profile_images/1484275038178234381/1BMQPOPF_400x400.jpg"
								></img>
								<p className="mb-0 px-1">Electronic Arts</p>
								<p>@EA</p>
							</div>
						</button>
						<button className="col-md-auto rounded-5" value="dice">
							<div>
								<img
									className="logo rounded-circle mt-2"
									alt="dice logo"
									src="https://pbs.twimg.com/profile_images/1555213204141359104/TUPLumee_400x400.png"
								></img>
								<p className="mb-0 px-5">DICE</p>
								<p>@EA_DICE</p>
							</div>
						</button>
					</div>
				</div>

				<div className="d-flex justify-content-center mt-3">
					<button className="btn btn-lg btn-outline-light rounded">
						Feeling lucky?
					</button>
				</div>
			</div>
		</>
	);
}

export default RandomTweet;

/*
{
  "children": "<RandomTweet />",
  "value": {
    "outlet": null,
    "matches": "[{…}]"
  }
}
[
  {
    "name": "State",
    "value": "",
    "subHooks": [],
    "hookSource": {
      "lineNumber": 32,
      "functionName": "RandomTweet",
      "fileName": "http://localhost:3000/main.3c5a6d77517b82c4a431.hot-update.js",
      "columnNumber": 90
    }
  },
  {
    "name": "State",
    "value": "",
    "subHooks": [],
    "hookSource": {
      "lineNumber": 33,
      "functionName": "RandomTweet",
      "fileName": "http://localhost:3000/main.3c5a6d77517b82c4a431.hot-update.js",
      "columnNumber": 78
    }
  },
  {
    "name": "Effect",
    "value": "ƒ () {}",
    "subHooks": [],
    "hookSource": {
      "lineNumber": 70,
      "functionName": "RandomTweet",
      "fileName": "http://localhost:3000/main.3c5a6d77517b82c4a431.hot-update.js",
      "columnNumber": 51
    }
  }
]
*/
