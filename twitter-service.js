const axios = require("axios");

const BEARER_TOKEN = process.env.REACT_APP_BEARER_TOKEN;

const tweetSearchUrl = "https://api.twitter.com/1.1/search/tweets.json?";
const timeLineUrl = "https://api.twitter.com/1.1/statuses/user_timeline.json";

async function searchByUser(searchValue) {
	const config = {
		headers: {
			Authorization: `${BEARER_TOKEN}`,
		},
		params: {
			count: 10,
			screen_name: searchValue,
		},
	};

	const res = await axios.get(timeLineUrl, config);
	return res.data;
}

async function searchByContent(searchValue) {
   const config = {
			headers: {
				Authorization: `${BEARER_TOKEN}`,
			},
			params: {
				q: searchValue,
				result_type: "popular",
			},
		};
   const res = await axios.get(tweetSearchUrl, config)
   return res.data.statuses;
}

async function defaultSearch() {
   const config = {
			headers: {
				Authorization: `${BEARER_TOKEN}`,
			},
			params: {
				q: "fps",
				result_type: "popular",
			},
   };
   const res = await axios.get(tweetSearchUrl, config);
   return res.data.statuses
}

module.exports = {
	searchByUser,
   searchByContent,
   defaultSearch,
};
