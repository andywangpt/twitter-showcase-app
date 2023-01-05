import { Button } from "bootstrap";
import React, { useState, useEffect } from "react";
import "../Pages/RandomTweet.css";


function RandomTweet() {
	const [getTweetFrom, setGetTweetFrom] = useState("");
   const [userId, setUserId] = useState("");
   
     const [isVisible, setIsVisible] = useState(false);

			function handleShowOverlay() {
				setIsVisible(true);
			}

			function handleHideOverlay() {
				setIsVisible(false);
			}

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
      setIsVisible(true);
		return;
	}

	return (
		<>
			<div className="bg container-sm">
				<h2 className="container bg-dark text-white w-50 d-block text-center my-5 p-2 rounded">
					Random Tweet Page
				</h2>

				<div className="m-3 rounded-sm">
					{isVisible && (
						<div
							className="bg-light overlay rounded-lg"
							onClick={handleHideOverlay}
						>
							<div className="overlay-content  d-flex justify-content-end rounded-sm">
								<button
									className="btn-sm btn-danger m-2"
									onClick={handleHideOverlay}
								>
									X
								</button>
							</div>
							<div
								id="tweet-container"
								className="row w-100 bg-light rounded m-2 mb-3"
								key='1223'
							>
								<div className="col-md-9">
									<div id="user-names" className="float-left w-100">
										<div>
											
											<div className="float-start ml-3 mt-2">
												<div>username</div>
												<div>@screen name</div>
											</div>
										</div>
									</div>
								</div>

								<div className="col-md-3">
									<div className="w-100 h-100">
										<div className="float-end mt-2" style={{ clear: "both" }}>
											<span className="">#likes</span>
											
										</div>
										<div className="float-end" style={{ clear: "both" }}>
											<span>#recount</span>

										</div>
									</div>
								</div>

								<div className="col-md-12 m-2">text</div>

	
								<div className="row">
									<div className="time-elements col">location</div>
								</div>

								<div className="card-footer text-muted row px-3 py-2">
									<div className="time-elements col">created at</div>
								</div>
							</div>
						</div>
					)}
				</div>

				<div className="d-flex flex-wrap justify-content-between mx-5 px-5">
					<button
						onClick={handleClick}
						className="mw-fit-content col-md-auto rounded-5"
						value="embark"
					>
						<div className="top-element">
							<img
								className="logo rounded-circle mt-2 top-element"
								alt="embark logo"
								src="https://pbs.twimg.com/profile_images/1116321108876320768/AuFVOU38_400x400.png"
							/>
							<p value="embark" className="mb-0 px-1 top-element">
								Embark Studios
							</p>
							<p value="embark" className="top-element">
								@EmbarkStudios
							</p>
						</div>
					</button>

					<button
						onClick={handleClick}
						className="mw-fit-content col-md-auto rounded-5"
						value="finals"
					>
						<div className="top-element">
							<img
								className="logo rounded-circle mt-2 top-element"
								alt="finals logo"
								src="https://pbs.twimg.com/profile_images/1562165525098250242/Z8oO1S4m_400x400.jpg"
							/>
							<p className="mb-0 px-1 top-element" value="finals">
								THE FINALS
							</p>
							<p className="top-element" value="finals">
								@reachthefinals
							</p>
						</div>
					</button>
				</div>

				<div className="d-flex flex-wrap justify-content-center mx-5 my-0 px-3 py-0">
					<button
						onClick={handleClick}
						className="col-md-auto rounded-5"
						value="battlefield"
					>
						<div className="top-element">
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

				<div className="d-flex flex-wrap justify-content-between mx-5 px-5">
					<button
						onClick={handleClick}
						className="col-md-auto rounded-5"
						value="electronicArts"
					>
						<div className="top-element">
							<img
								className="logo rounded-circle mt-2"
								alt="electronic arts logo"
								src="https://pbs.twimg.com/profile_images/1484275038178234381/1BMQPOPF_400x400.jpg"
							></img>
							<p className="mb-0 px-1">Electronic Arts</p>
							<p>@EA</p>
						</div>
					</button>

					<button
						onClick={handleClick}
						className="col-md-auto rounded-5"
						value="dice"
					>
						<div className="top-element">
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

				<div className="d-flex justify-content-center m-3">
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
*/
