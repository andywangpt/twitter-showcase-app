require("dotenv").config();
const express = require("express");
const path = require("path");
const axios = require("axios");
const app = express();

const port = 5001;
const BEARER_TOKEN = process.env.REACT_APP_BEARER_TOKEN;
const tweetSearchUrl = "https://api.twitter.com/1.1/search/tweets.json?";
const timeLineUrl = "https://api.twitter.com/1.1/statuses/user_timeline.json";

let arrayOfTweets = [];

app.use("/", express.static(path.join(__dirname, "client/build"))); //still don't understand express.static

app.get("/api/tweets", (req, res) => {
	const searchValue = req.query.search_value;
	const searchType = req.query.search_type;

	if (searchType === "user") {
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
			.get(timeLineUrl, config)
			.then((res) => {
				arrayOfTweets = res.data;
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
		const config = {
			headers: {
				Authorization: `${BEARER_TOKEN}`,
			},
			params: {
				user_id: `${search}`,
				count: 10,
			},
		};
		try {
			const response = await axios.get(timeLineUrl, config);
			res.send(response.data);
		} catch (error) {
			console.log(error);
			res.send("something went wrong");
		}
	}
});

app.get("*", async (req, res) => {
	res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(port);
