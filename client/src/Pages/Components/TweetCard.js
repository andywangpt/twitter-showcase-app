import React from "react";

import icons8love48 from "./icons8love48.png";
import icons8retweet from "./icons8retweet.png";

function TweetCard({ tweets, tweetNumber }) {
   tweetNumber++;
   
	if (tweets === "undefined" || tweets.length === 0) {
		return;
	}
	if (tweets === "something went wrong") {
		return <>Error: User Not Found</>;
	}

	console.log(tweets);
	return (
		<>
			{tweets.map((tweet, key) => (
				<div
					id="tweet-container"
					className="row w-100 bg-light rounded m-2 mb-3"
					key={key}
				>
					<div className="col-md-9">
						<div id="user-names" className="float-left w-100">
							<div>
								<img
									src={tweet.user.profile_image_url}
									className="logo float-start rounded-circle mt-2"
									alt="logo"
								/>
								<div className="float-start ml-3 mt-2">
									<div>{tweet.user.name}</div>
									<div>@{tweet.user.screen_name}</div>
								</div>
							</div>
						</div>
					</div>

					<div className="col-md-3">
						<div className="w-100 h-100">
							<div className="float-end mt-2" style={{ clear: "both" }}>
								<span className="">#{tweet.favorite_count}</span>
								<img src={icons8love48} className="icon" alt="like" />
							</div>
							<div className="float-end" style={{ clear: "both" }}>
								<span>#{tweet.retweet_count}</span>
								<img src={icons8retweet} className="icon" alt="retweet" />
							</div>
						</div>
					</div>

					<div className="col-md-12 m-2">{tweet.text}</div>

					<div id="media-container" className="col-md-12 m-2">
						{tweet.extended_entities ? (
							<img
								className="col"
								src={tweet.extended_entities.media[0].media_url}
								alt="tweet entities"
							/>
						) : (
							<></>
						)}
					</div>
					<div className="row">
						<div className="time-elements col">{tweet.user.location}</div>
					</div>

					<div className="card-footer text-muted row px-3 py-2">
						<div className="time-elements col">{tweet.created_at}</div>
					</div>
				</div>
			))}
		</>
	);
}

export default TweetCard;