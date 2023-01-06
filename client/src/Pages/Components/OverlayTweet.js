import React from "react";
import icons8love48 from "./icons8love48.png";
import icons8retweet from "./icons8retweet.png";

function OverlayTweet({ randomTweet }) {
	if (randomTweet == "undefined" || randomTweet.length === 0) {
		return;
	}

	return (
		<>
			<div id="tweet-container" className="bg-light" key="1223">
				<div className="col-md-9">
					<div id="user-names" className="float-left w-100">
						<div>
							<img
								src={randomTweet.profile_image_url}
								className="logo float-start rounded-circle mt-2"
								alt="logo"
							/>
							<div className="float-start ml-3 mt-2">
								<div>{randomTweet.name}</div>
								<div>@{randomTweet.screen_name}</div>
							</div>
						</div>
					</div>
				</div>

				<div className="">
					<div className="w-100 h-100">
						<div className="float-end mt-2" style={{ clear: "both" }}>
							<span className="">#{randomTweet.status.favorite_count}</span>
							<img src={icons8love48} className="icon" alt="like" />
						</div>
						<div className="float-end" style={{ clear: "both" }}>
							<span>#{randomTweet.status.retweet_count}</span>
							<img src={icons8retweet} className="icon" alt="retweet" />
						</div>
					</div>
				</div>

				<div className="col-md-12 m-2">{randomTweet.status.text}</div>

				<div className="row">
					<div className="time-elements col">{randomTweet.location}</div>
				</div>

				<div className="card-footer text-muted row px-3 py-2">
					<div className="time-elements col">{randomTweet.created_at}</div>
				</div>
			</div>
		</>
	);
}

export default OverlayTweet;
