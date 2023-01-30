require("dotenv").config();
const express = require("express");
const path = require("path");
const axios = require("axios");
const app = express();

const twitterService = require("./twitter-service");

const port = 5001;
const BEARER_TOKEN = process.env.REACT_APP_BEARER_TOKEN;
const tweetSearchUrl = "https://api.twitter.com/1.1/search/tweets.json?";
const timeLineUrl = "https://api.twitter.com/1.1/statuses/user_timeline.json";

let arrayOfTweets = [];

app.use("/", express.static(path.join(__dirname, "client", "build"))); //still don't understand express.static

console.log(path.join(__dirname, "client", "build"));

app.get("/api/tweets", async (req, res) => {
	const searchValue = req.query.search_value;
	const searchType = req.query.search_type;

	if (searchType === "user") {
		try {
			const tweets = await twitterService.searchByUser(searchValue);
			res.send(tweets);
		} catch (error) {
			console.log(error);
			res.send("something went wrong");
		}
	} else if (searchType === "content") {
		try {
			const tweets = await twitterService.searchByContent(searchValue);
			res.send(tweets);
		} catch (error) {
			console.log(error);
			res.send("something went wrong");
		}
	} else {
		try {
			const tweets = await twitterService.defaultSearch(searchValue);
			res.send(tweets);
		} catch (error) {
			console.log(error);
			res.send("something went wrong");
		}
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

app.listen(port);
