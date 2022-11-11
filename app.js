const express = require("express");
const path = require("path");
const axios = require("axios");
const app = express();
const bearToken = "AAAAAAAAAAAAAAAAAAAAAAWphgEAAAAAHyXA3T%2FB%2B9dS%2FZAtP6TG9n2%2B1Mo%3D5JR8gu58DzqXiA7IapPAuTM7lpwFs0b04d6fblMg6GldoHF08m"

app.use("/", express.static(path.join(__dirname, "client/build")));

//app.get("/api/name", (req, res) => {
//	res.json({ name: "andy" });
//	res.send("hello from rooot");
//	console.log("hello");
//});



app.get("/api/tweets", function (req, res) {
	const callOptions = {
		method: "POST",
		url: `https://api.twitter.com/1.1/search/tweets.json?q=elon&result_type=popular`,
		headers: {
			'Authorization':
				`Bearer ${bearToken}`,
		},
	};

	axios
      .get('https://api.twitter.com/1.1/search/tweets.json', {
         headers: {
            'Authorization': `Bearer ${bearToken}`
         }
      })
		.then(function (res) {
			//handle success
			const apiData = res.data;
			console.log('API DATA');
			res.send(apiData);
			//res.send(res);
		})
		.catch(function (error) {
			//handle eror
			console.log(error);
			res.send("something went wrong");
      })
      .then(function () {
        console.log('component ran') 
      })
	//res.send('')
});

app.listen(5001);


//"https://api.twitter.com/1.1/search/tweets.json?q=elon&result_type=popular"
//"https://swapi.dev/api/people/1"

