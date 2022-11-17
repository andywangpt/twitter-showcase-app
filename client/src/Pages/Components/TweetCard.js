import React, { useState, useEffect } from "react";

import icons8love48 from "./icons8love48.png";
import icons8retweet from "./icons8retweet.png";

function TweetCard() {
	const [tweets, setTweets] = useState([]);

	useEffect(() => {
		fetch("api/tweets")
			.then((res) => res.json())
			.then((data) => {
				setTweets(data);
				console.log("success");
			});
	}, []);

	if (tweets.length === 0) {
		return <></>;
	}

	return (
		<>
			<div id="tweet-container" className="row w-100 bg-light rounded m-2 mb-3">
				<div className="col-md-6">
					<div id="user-names" className="float-left w-100">
						<div>
							<img
								src={tweets[0].user.profile_image_url}
								className="logo float-start"
								alt="logo"
							/>
							<div className="float-start ml-3 mt-2">
								<div></div>
								<div></div>
							</div>
						</div>
					</div>
				</div>

				<div className="col-md-6">
					<div className="w-100 h-100">
						<div className="float-end" style={{ clear: "both" }}>
							<span className="">#{tweets[0].favorite_count}</span>
							<img src={icons8love48} className="icon" alt="like" />
						</div>
						<div className="float-end" style={{ clear: "both" }}>
							<span>#{tweets[0].retweet_count}</span>
							<img src={icons8retweet} className="icon" alt="retweet" />
						</div>
					</div>
				</div>

				<div className="col-md-12 m-2">{tweets[0].text}</div>

				<div id="media-container" className="col-md-12 m-2">
					Media
					<img></img>
				</div>

				<div className="card-footer text-muted row px-3 py-2">
					<div className="time-elements col-3">{tweets[0].created_at}</div>・
					<div className="time-elements col-2">10:10AM</div>・
					<div className="time-elements col-3">{tweets[0].user.location}</div>
				</div>
			</div>
		</>
	);
}

/*
{tweets[0].text}
{tweets[0].entities.media.media_url}
*/

export default TweetCard;
