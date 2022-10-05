import React from "react";

function RandomTweet() {
	return (
		<>
			<h2 className="container bg-info w-50 d-block text-center my-5 p-2  rounded">
				RandomTweet Page
			</h2>

			<div className="profile-cards flex-column container-fluid justify-content-evenly align-items-center flex-wrap">
				<div className="row d-flex align-items-center my-2">
					<button className="col mx-5">
						<div>
							<img></img>
							<p>userName</p>
							<p>@userName</p>
						</div>
					</button>
					<button className="col mx-5">
						<div>
							<img></img>
							<p>userName</p>
							<p>@userName</p>
						</div>
					</button>
				</div>

				<div className="row d-flex justify-content-space-evenly align-items-center my-2 mx-5">
					<button>
						<div>
							<img></img>
							<p>userName</p>
							<p>@userName</p>
						</div>
					</button>
				</div>

				<div className="row d-flex align-items-center my-2">
					<button className="col mx-5">
						<div>
							<img></img>
							<p>userName</p>
							<p>@userName</p>
						</div>
					</button>
					<button className="col mx-5">
						<div>
							<img></img>
							<p>userName</p>
							<p>@userName</p>
						</div>
					</button>
				</div>
			</div>
		</>
	);
}

export default RandomTweet;
