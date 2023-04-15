import React from "react";
import "../Pages/Home.css";
import iconAccuracy from "../Assets/icons8-accuracy-91.png";

function Home() {
	return (
		<>
			<div className="bg container">
				<div className="container-fluid d-flex pb-1">
					<div className="home-container container-lg p-3 my-3 text-black align-items-center rounded-5">
						<h1 className="row justify-content-center w-75 p-1 m-auto mb-3 bg-dark text-white rounded">
							The Latest Tweets in FPS Gaming
                  </h1>
                  
						<h1 className="d-flex text-center text-light bg-danger rounded-1">
							As of 4/14/23, Twitter has removed my access to their API along
							with most of the developer community. Please see the other
							projects in my portfolio.
						</h1>

						<div className="img-wrapper">
							<img
								className="img-responsive twitter-logo mx-auto d-block img-fluid max-width:50%"
								src="https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
								alt="twitter logo"
							/>
						</div>

						<div className="container lead m-auto py-3">
							<div className="row m-2">
								<img
									className="icon-accuracy px-1"
									src={iconAccuracy}
									alt="icon"
								/>
								<div className="col-lg px-1">
									Use SEARCH TWEETS find the latest game development tweets from
									my favorite FPS gaming studios.
								</div>
							</div>
							<div className="row m-2">
								<img
									className="icon-accuracy px-1"
									src={iconAccuracy}
									alt="accuracy"
								/>
								<div className="col-lg px-1">
									Use RANDOM TWEETS to find a tweet from one of the FPS game
									studios
								</div>
							</div>
							<div className="row m-2">
								<img className="icon-accuracy px-1" src={iconAccuracy} />
								<div className="col-lg px-1">
									This app uses the Twitter API to find relevent tweets and
									gives users the content they want.
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="footer container d-flex">
					<a
						href="../Assets/twitter.png"
						className="attribute"
						title="twitter icons"
					>
						Twitter icons created by Pixel perfect - Flaticon
					</a>
					<a target="_blank" href="https://icons8.com/icon/dhFgIPyZ3cMH/aim">
						Aim
					</a>
					icon by
					<a target="_blank" href="https://icons8.com">
						Icons8
					</a>
					Photo by{" "}
					<a href="https://unsplash.com/@florianolv?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
						Florian Olivo
					</a>{" "}
					on{" "}
					<a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
						Unsplash
					</a>
					Photo by{" "}
					<a href="https://unsplash.com/@elladon?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
						ELLA DON
					</a>{" "}
					on{" "}
					<a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
						Unsplash
					</a>
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


      Photo by <a href="https://unsplash.com/@florianolv?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Florian Olivo</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
  
  Photo by <a href="https://unsplash.com/@elladon?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">ELLA DON</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
*/
