//import { Button } from "bootstrap";
import React, { useState, useEffect } from "react";
import "../Pages/RandomTweet.css";
import axios from "axios";
import OverlayTweet from "./Components/OverlayTweet";

function RandomPage() {
	const [randomTweet, setRandomTweet] = useState("");

	const [userId, setUserId] = useState("");
	const [userChoice, setUserChoice] = useState(null);
	const [flag, setFlag] = useState(false);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		if (flag) {
			switch (userChoice) {
				case "embark":
				case 1:
					setUserId("1059851910071619585");
					break;
				case "finals":
				case 2:
					setUserId("1557376951282712577");
					break;
				case "battlefield":
				case 3:
					setUserId("27855118");
					break;
				case "dice":
				case 4:
					setUserId("378186136");
					break;
				case "electronicArts":
				case 5:
					setUserId("15234657");
					break;
				default:
					break;
			}

			setFlag(false);

			searchUser().then(async (res) => {
				if (res.data && res.data.length) {
					const random = getRandomNumber(6);
					const result = await res.data[random];
					if (result) {
						setRandomTweet(result);
						setIsVisible(true);
					}
				}
			});
		}
	}, [flag, userChoice]);

	async function searchUser() {
		try {
			const search = await axios.get(`/api/searchByUser?search=${userId}`);
			return search;
		} catch (err) {
			console.log(err);
		}
	}

	function handleHideOverlay() {
		setIsVisible(false);
		setUserChoice("");
	}

	function handleClick(e) {
		e.preventDefault();

		const choice = e.target.value;
		setFlag(true);
		setUserChoice(choice);
	}

	function handleLuckyButton() {
		const random = getRandomNumber(5);
		setUserChoice(random);
		setFlag(true);
		setIsVisible(false);
	}

	function getRandomNumber(factor) {
		return Math.floor(Math.random() * factor) + 1;
	}

	return (
		<>
			<div className="container-sm mw-50">
				<h2 className="container bg-dark text-white w-50 d-block text-center my-5 p-2 rounded">
					Random Tweet Page
				</h2>

				<div className="m-4 rounded-sm">
					{isVisible && randomTweet && (
						<div
							className="bg-light overlay rounded-lg"
							onClick={handleHideOverlay}
						>
							<p className="d-flex justify-content-center text-secondary m-1">
								Click on tweet to close
							</p>
							<OverlayTweet randomTweet={randomTweet} />
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
					<button
						className="btn btn-lg btn-outline-light rounded"
						onClick={handleLuckyButton}
					>
						Feeling lucky?
					</button>
				</div>
			</div>
		</>
	);
}

export default RandomPage;
