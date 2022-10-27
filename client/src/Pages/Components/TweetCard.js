import React from "react";
import logo512 from "./logo512.png";
import icons8love48 from "./icons8love48.png";
import icons8retweet from "./icons8retweet.png";

function TweetCard() {
	return (
		<>
			<div id="tweet-container" className="row w-100 bg-light rounded m-2 mb-3">
				<div className="col-md-6">
					<div id="user-names" className="float-left w-100">
						<div>
							<img src={logo512} className="logo float-start" alt="logo" />
							<div className="float-start ml-3 mt-2">
								<div>spiderman</div>
								<div>@spiderman</div>
							</div>
						</div>
					</div>
				</div>

				<div className="col-md-6">
					<div className="w-100 h-100">
						<div className="float-end" style={{ clear: "both" }}>
							<span className="">#likes</span>
							<img src={icons8love48} className="icon" alt="like" />
						</div>
						<div className="float-end" style={{ clear: "both" }}>
							<span>#retweets</span>
							<img src={icons8retweet} className="icon" alt="retweet" />
						</div>
					</div>
				</div>

				<div className="col-md-12">TWEET</div>

				<div id="media-container" className="col-md-12">
					Media
				</div>

				<div className="card-footer text-muted row px-3 py-2">
					<div className="time-elements col-3">913/27/2022</div>・
					<div className="time-elements col-2">10:10AM</div>・
					<div className="time-elements col-3">North America</div>
				</div>
			</div>

		
		</>
	);
}

export default TweetCard;


/* 
			<div
				id="card-container"
				className="card w-75 m-3 p-1 border-light rounded-lg"
			>
				<div
					id="card-header"
					className="card-title row d-flex flex-wrap mb-0 gx-2"
				>
					<div className="logo col-md-2 pl-0 pr-2 mx-1 justify-content-center align-self-center mw-fit-content">
						<img
							src={logo512}
							className="logo mx-2 align-items-center"
							alt="logo"
						/>
					</div>

					<div
						id="user-names"
						className="col-sm-5 ps-2 pe-3 ms-1 me-4 d-flex align-items-flex-start flex-nowrap"
					>
						<div>spiderman</div>
						<div>@spiderman</div>
					</div>

					<div id="icon-container" className="col-sm-4 g-0">
						<div className="row">
							#likes
							<img src={icons8love48} className="icon" alt="like" />
						</div>
						<div className="row">
							#retweets
							<img src={icons8retweet} className="icon" alt="retweet" />
						</div>
					</div>
				</div>

				<div className="card-body m-0 px-3 py-1 align-self-baseline">
					<div id="tweet-container" className="row">
						Tweet placeholder
					</div>
					<div id="media-container" className="row">
						Media placeholder
					</div>
				</div>

				<div className="card-footer text-muted row g-0">
					<div className="time-elements col-3">9/27/2022</div>・
					<div className="time-elements col-2">10:10AM</div>・
					<div className="time-elements col-3">North America</div>
				</div>
			</div>
*/