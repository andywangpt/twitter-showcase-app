const express = require("express");
const path = require("path");
const axios = require("axios");
const app = express();
const port = 5001;
const bearToken =
	"AAAAAAAAAAAAAAAAAAAAAAWphgEAAAAAHyXA3T%2FB%2B9dS%2FZAtP6TG9n2%2B1Mo%3D5JR8gu58DzqXiA7IapPAuTM7lpwFs0b04d6fblMg6GldoHF08m";
let arrayOfTweets = "";

app.use("/", express.static(path.join(__dirname, "client/build")));

app.get("/api/tweets", function (req, res) {
	axios
		.get(
			"https://api.twitter.com/1.1/search/tweets.json?q=elon&result_type=popular",
			{
				headers: {
					Authorization: `Bearer ${bearToken}`,
				},
			}
		)
		.then(function (res) {
			arrayOfTweets = res.data.statuses;
			console.log(arrayOfTweets[10].text);  //single test tweet
			//res.send(arrayOfTweets);  //doesn't work here for some reason
		})
		.then(function () {
			res.send(arrayOfTweets);
		})
		.catch(function (error) {
			console.log(error);
			res.send("something went wrong");
		});
});

app.listen(port);
