import React from "react";
import { Link } from "react-router-dom";
//import aimLogo from "../Assets/icons8-aim-64.png";
//import targetIcon from "../Assets/icons8-target-100.png";
import accuracyIcon from "../Assets/icons8-accuracy-90.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function NavBar() {
	return (
		<>
			<nav className="navbar navbar-dark navbar-expand-sm py-0">
				<a className="navbar-brand row mr-1">
					<img
						src={accuracyIcon}
						width="50"
						height="50"
						className="d-inline-block align-center ml-2 mr-0 col-sm pr-0"
						alt="aim logo"
					/>
				</a>

				<button
					className="navbar-toggler"
					data-toggle="collapse"
					data-target="#navbarCollapse"
				>
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="navbar-collapse collapse" id="navbarCollapse">
					<ul className="nav navbar-nav mr-auto text-uppercase">
						<li className="navbar-item m-1">
							<Link className="nav-link" to="/">
								Home
							</Link>
						</li>
						<li className="navbar-item m-1">
							<Link className="nav-link" to="/searchtweet">
								Search Tweets
							</Link>
						</li>
						<li className="navbar-item m-1">
							<Link className="nav-link" to="randomtweet">
								Random Tweets
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</>
	);
}

export default NavBar;

/*
<a target="_blank" href="https://icons8.com/icon/61099/accuracy">Accuracy</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
*/
