import React from "react";
import icons8love48 from "./icons8love48.png";
import icons8retweet from "./icons8retweet.png";

function OverlayTweet({ randomTweet }) {
	if (randomTweet === "undefined" || randomTweet.length === 0) {
		return <></>;
	}

	return (
		<>
			<div id="tweet-container" className="bg-light" key="1223">
				<div className="row">
					<div className="col-sm-9">
						<div id="user-names" className="float-left w-100">
							<div>
								<img
									src={randomTweet.user.profile_image_url}
									className="logo float-start rounded-circle m-2"
									alt="logo"
								/>
								<div className="float-start ml-0 mt-2">
									<div>{randomTweet.user.name}</div>
									<div>@{randomTweet.user.screen_name}</div>
								</div>
							</div>
						</div>
					</div>

					<div className="col-sm-3">
						<div className="w-100 h-100">
							<div className="float-end mt-2 mr-2" style={{ clear: "both" }}>
								<span className="">#{randomTweet.favorite_count}</span>
								<img src={icons8love48} className="icon" alt="like" />
							</div>

							<div className="float-end mr-2" style={{ clear: "both" }}>
								<span>#{randomTweet.retweet_count}</span>
								<img src={icons8retweet} className="icon" alt="retweet" />
							</div>
						</div>
					</div>
				</div>

				<div className="row">
					{randomTweet.extended_entities ? (
						<img
							className="col mw-fit-content"
							src={randomTweet.extended_entities.media[0].media_url}
						/>
					) : (
						<></>
					)}
				</div>

				<div className="row">
					<div className="col w-75 d-flex mx-3 py-4">{randomTweet.text}</div>
				</div>

				<div id="media-container" className="col-md-12 m-2">
					<img className="col" src={randomTweet[0]}></img>
				</div>

				<div className="card-footer text-muted row px-3 py-2">
					<div className="time-elements col">{randomTweet.created_at}</div>
				</div>
			</div>
		</>
	);
}

export default OverlayTweet;
