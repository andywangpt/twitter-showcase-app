const express = require("express");
const path = require("path");
const axios = require("axios");
const app = express();

const port = 5001;
const BEARER_TOKEN =
	"Bearer AAAAAAAAAAAAAAAAAAAAAAWphgEAAAAAHyXA3T%2FB%2B9dS%2FZAtP6TG9n2%2B1Mo%3D5JR8gu58DzqXiA7IapPAuTM7lpwFs0b04d6fblMg6GldoHF08m";

const tweetSearchUrl = "https://api.twitter.com/1.1/search/tweets.json?q=";
const userSearchUrl = "https://api.twitter.com/1.1/users/search.json?q=";
const searchTerm = "bitcoin";

let arrayOfTweets = [];
let arrayOfUsers = [];

app.use("/", express.static(path.join(__dirname, "client/build"))); //still don't understand this line

app.get("/api/tweets", (req, res) => {
	axios
		.get(`${tweetSearchUrl}${searchTerm}`, {
			headers: {
				Authorization: `${BEARER_TOKEN}`,
			},
		})
		.then((res) => {
			arrayOfTweets = res.data.statuses;
			console.log(arrayOfTweets[0].text); //single test tweet
			//res.send(arrayOfTweets);  //doesn't work here for some reason
		})
		.then(() => {
			res.send(arrayOfTweets);
		})
		.catch((error) => {
			console.log(error);
			res.send("something went wrong");
		});
});

app.get("/api/users", (req, res) => {
	axios
		.get(`${userSearchUrl}${searchTerm}`, {
			headers: {
				Authorization: `${BEARER_TOKEN}`,
			},
		})
		.then((res) => {
			arrayOfUsers = res.data;
			//res.send(arrayOfUsers) //doesn't work here
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

app.listen(port);
