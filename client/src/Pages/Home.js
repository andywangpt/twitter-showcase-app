import React from "react";
import twitterLogo from "../Assets/twitter.png";
import "../Pages/SearchTweet.css";

function Home() {
   return (
			<>
				<div
					style={{
						backgroundImage:
							"https://images.unsplash.com/photo-1573053986275-840ffc7cc685?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3387&q=80",
					}}
				>
					<div className="container-fluid d-flex bg-secondary pb-5">
						<div className="container-lg p-3 my-3 bg-dark text-white align-items-center">
							<h1 className="row justify-content-center bg-secondary rounded mw-fit-content mb-4">
								The Latest News in FPS Gaming
							</h1>
							<img
								className="twitter-logo mx-auto d-block img-fluid max-width:50% "
								src="https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
								alt="twitter logo"
							/>
							<p className="lead m-auto p-5">
								Use the search feature to stay up to date with the latest game
								development updates from some of the most popular FPS gaming
								studios.
								<br></br>
								<br></br>
								You can also select from my recommended list of Twitter users to
								fetch a random tweet.
								<br></br>
								<br></br>
								This web app utilizes the Twitter API to fetch tweets and
								present them in different ways.
							</p>
							<div className="footer">
								<a
									href="../Assets/twitter.png"
									className="attribute"
									title="twitter icons"
								>
									Twitter icons created by Pixel perfect - Flaticon
								</a>
								<br></br>
								<a
									target="_blank"
									href="https://icons8.com/icon/dhFgIPyZ3cMH/aim"
								>
									Aim
								</a>
								icon by
								<a target="_blank" href="https://icons8.com">
									Icons8
								</a>
							</div>
						</div>
					</div>
				</div>
			</>
		);
}

export default Home;

/*
      <img 
        src='/Users/andywang/codingProjectsMac/twitter-showcase-app/client/src/Assets/twitter.png' 
        alt='Twitter icons created by Pixel perfect - Flaticon'>
      </img>

*/
