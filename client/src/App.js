import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import RandomPage from "./Pages/RandomPage";
import SearchPage from "./Pages/SearchPage";
import ErrorPage from "./Pages/ErrorPage";

function App() {
	//const [tweets, setTweets] = React.useState([]);

	return (
		<>
			<Router>
				<NavBar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/randomtweet" element={<RandomPage />} />
					<Route path="/searchtweet" element={<SearchPage />} />
					<Route path="*" element={<ErrorPage />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
