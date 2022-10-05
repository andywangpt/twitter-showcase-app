import { Button } from "bootstrap";
import React from "react";

function RandomTweet() {
	return (
		<>
			<h2 className="container bg-info w-50 d-block text-center my-5 p-2 rounded">
				RandomTweet Page
			</h2>

			<div className="profile-cards flex-column container-fluid justify-content-evenly align-items-center flex-wrap">
				<div className="row d-flex align-items-center my-2">
					<button className="col mx-5">
						<div>
							<img
								className="logo rounded-circle mt-2"
								alt="embark logo"
								src="https://pbs.twimg.com/profile_images/1116321108876320768/AuFVOU38_400x400.png"
							></img>
							<p className="mb-0">Embark Studios</p>
							<p>@EmbarkStudios</p>
						</div>
					</button>
					<button className="col mx-5">
						<div>
							<img
								className="logo rounded-circle mt-2"
								alt="finals logo"
								src="https://pbs.twimg.com/profile_images/1562165525098250242/Z8oO1S4m_400x400.jpg"
							></img>
							<p className="mb-0">THE FINALS</p>
							<p>@reachthefinals</p>
						</div>
					</button>
				</div>

				<div className="row justify-content-space-evenly align-items-center my-2 mx-5">
					<button className="mw-fit-content">
						<div>
							<img
								className="logo rounded-circle mt-2"
								alt="battlefield logo"
								src="https://pbs.twimg.com/profile_images/1574420965701947393/jqeuRVqh_400x400.png"
							></img>
							<p className="mb-0">Battlefield</p>
							<p>@Battlefield</p>
						</div>
					</button>
				</div>

				<div className="row d-flex align-items-center my-2">
					<button className="col mx-5">
						<div>
							<img
								className="logo rounded-circle mt-2"
								alt="electronic arts logo"
								src="https://pbs.twimg.com/profile_images/1484275038178234381/1BMQPOPF_400x400.jpg"
							></img>
							<p className="mb-0">Electronic Arts</p>
							<p>@EA</p>
						</div>
					</button>
					<button className="col mx-5">
						<div>
							<img
								className="logo rounded-circle mt-2"
								alt="dice logo"
								src="https://pbs.twimg.com/profile_images/1555213204141359104/TUPLumee_400x400.png"
							></img>
							<p className="mb-0">DICE</p>
							<p>@EA_DICE</p>
						</div>
					</button>
				</div>
			</div>

			<div className="d-flex justify-content-center mt-3">
				<button className="bg-dark text-light rounded">Feeling lucky?</button>
			</div>
		</>
	);
}

export default RandomTweet;
