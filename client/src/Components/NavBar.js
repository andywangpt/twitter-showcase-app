import React from "react";
import { Link } from "react-router-dom";
//import aimLogo from "../Assets/icons8-aim-64.png";
//import targetIcon from "../Assets/icons8-target-100.png";
import accuracyIcon from "../Assets/icons8-accuracy-90.png";

function NavBar() {
	return (
		<nav className="navbar navbar-dark navbar-expand-lg py-0">
			<a className="navbar-brand row mr-1">
				{" "}
				{/*href="#"*/}
				<img
					src={accuracyIcon}
					width="50"
					height="50"
					className="d-inline-block align-center ml-2 mr-0 col-sm pr-0"
					alt="aim logo"
				/>
				{/*<h3 className="col align-self-center font-weight-bolder">FPS Game Dev Tweet Tracker</h3>*/}
			</a>

			<button
				className="navbar-toggler"
				data-toggle="collapse"
				data-target="#navbarCollapse"
			>
				<span className="navbar-toggler-icon"></span>
			</button>

			<div className="collapse navbar-collapse" id="navbarCollapse">
				<ul className="navbar-nav mr-auto text-uppercase">
					<li className="navbar-item m-1">
						<Link className="nav-link" to="/">
							<h3>Home</h3>
						</Link>
					</li>
					<li className="navbar-item m-1">
						<Link className="nav-link" to="/searchtweet">
							<h3>Search Tweets</h3>
						</Link>
					</li>
					<li className="navbar-item m-1">
						<Link className="nav-link" to="randomtweet">
							<h3>Random Tweets</h3>
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default NavBar;

/*
<a target="_blank" href="https://icons8.com/icon/61099/accuracy">Accuracy</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
*/