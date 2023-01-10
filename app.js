const express = require("express");
const path = require("path");
const axios = require("axios");
const app = express();

require("dotenv").config();

const port = 5001;

const BEARER_TOKEN = process.env.REACT_APP_BEARER_TOKEN;

const tweetSearchUrl = "https://api.twitter.com/1.1/search/tweets.json?";
const userSearchUrl = "https://api.twitter.com/1.1/users/search.json?";
const timeLineUrl = "https://api.twitter.com/1.1/statuses/user_timeline.json";
const searchTerm = "elonmusk";

let arrayOfTweets = [];
let arrayOfUsers = [];

app.use("/", express.static(path.join(__dirname, "client/build"))); //still don't understand express.static

app.get("/api/tweets", (req, res) => {
	const dummyData = "user";
	const searchValue = req.query.search_value;
	const searchType = req.query.search_type; //req.query.search_type;
	console.log("line 24: ", searchValue, searchType); //search Value + Type does get passed in

	if (searchType === "user") {
		// if searchType is "user"
		console.log("line 27: searchType === ", searchType);
		const config = {
			headers: {
				Authorization: `${BEARER_TOKEN}`,
			},
			params: {
				count: 10,
				screen_name: searchValue,
			},
		};

		axios
			.get("https://api.twitter.com/1.1/statuses/user_timeline.json", config)
			.then((res) => {
				arrayOfTweets = res.data;
				//console.log(res.data);
				//res.send(arrayOfTweets);  //doesn't work here for some reason
			})
			.then(() => {
				res.send(arrayOfTweets);
			})
			.catch((error) => {
				console.log(error);
				res.send("something went wrong");
			});
	} else if (searchType === "content") {
		//if searchType is "content"
		const config = {
			headers: {
				Authorization: `${BEARER_TOKEN}`,
			},
			params: {
				q: searchValue,
				result_type: "popular",
			},
		};

		axios
			.get(tweetSearchUrl, config)
			.then((res) => {
				arrayOfTweets = res.data.statuses;
				//res.send(arrayOfTweets);  //doesn't work here for some reason
			})
			.then(() => {
				res.send(arrayOfTweets);
			})
			.catch((error) => {
				console.log(error);
				res.send("something went wrong");
			});
	} else {
		const config = {
			headers: {
				Authorization: `${BEARER_TOKEN}`,
			},
			params: {
				q: "fps",
				result_type: "popular",
			},
		};
		axios
			.get(tweetSearchUrl, config)
			.then((res) => {
				arrayOfTweets = res.data.statuses;
			})
			.then(() => {
				res.send(arrayOfTweets);
			})
			.catch((error) => {
				console.log(error);
				res.send("something went wrong");
			});
	}
});

app.get("/api/searchByUser", async (req, res) => {
	const search = req.query.search;

	if (search) {
		console.log("search ", search);
		const config = {
			headers: {
				Authorization: `${BEARER_TOKEN}`,
			},
			params: {
				//user_id: `${search}`,
				user_id: `${search}`,
				count: 10,
			},
		};

		try {
			const response = await axios.get(timeLineUrl, config);
			console.log(response.data);
			res.send(response.data);
			//arrayOfTweets = response.data;
		} catch (error) {
			console.log(error);
			res.send("something went wrong");
		}
		//console.log("response.data", response.data[0].name);
	}
});

/*
app.get("/api/users", (req, res) => {
	axios
		.get(`${userSearchUrl} ${searchTerm}`, {
			headers: {
				Authorization: `${BEARER_TOKEN}`,
			},
		})
		.then((res) => {
			arrayOfUsers = res.data;
			//res.send(arrayOfUsers) //doesn't work here either
			console.log(res.data[0].name); //single test user name
		})
		.then(() => {
			res.send(arrayOfUsers);
		})
		.catch((error) => {
			res.send("something went wrong");
			console.log(error);
		});
});
*/

app.listen(port);
