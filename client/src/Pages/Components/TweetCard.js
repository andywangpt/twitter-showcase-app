import React, { useState, useEffect } from "react";

import icons8love48 from "./icons8love48.png";
import icons8retweet from "./icons8retweet.png";

let tweetMedia = [];

function TweetCard({ tweets, tweetNumber }) {
	//tweetNumber++

	if (tweets[tweetNumber].extended_entities) {
		tweetMedia[tweetNumber] =
			tweets[tweetNumber].extended_entities.media[0].media_url || "";
	}

	return (
		<>
			<div id="tweet-container" className="row w-100 bg-light rounded m-2 mb-3">
				<div className="col-md-6">
					<div id="user-names" className="float-left w-100">
						<div>
							<img
								src={tweets[tweetNumber].user.profile_image_url}
								className="logo float-start rounded-circle mt-2"
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
						<div className="float-end mt-2" style={{ clear: "both" }}>
							<span className="">#{tweets[tweetNumber].favorite_count}</span>
							<img src={icons8love48} className="icon" alt="like" />
						</div>
						<div className="float-end" style={{ clear: "both" }}>
							<span>#{tweets[tweetNumber].retweet_count}</span>
							<img src={icons8retweet} className="icon" alt="retweet" />
						</div>
					</div>
				</div>

				<div className="col-md-12 m-2">{tweets[tweetNumber].text}</div>

				<div id="media-container" className="col-md-12 m-2">
					<img className="col" src={tweetMedia[tweetNumber]}></img>
				</div>
				<div className="row">
					<div className="time-elements col">
						{tweets[tweetNumber].user.location}
					</div>
				</div>

				<div className="card-footer text-muted row px-3 py-2">
					<div className="time-elements col">
						{tweets[tweetNumber].created_at}
					</div>
				</div>
			</div>
		</>
	);
}

export default TweetCard;
