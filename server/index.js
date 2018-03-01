const express = require('express')
const app = express()
module.exports = app
const request = require('request');
var bodyParser = require('body-parser');
var jsonminify = require("jsonminify");


// Parse JSON (uniform resource locators)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))


app.listen(9000, function() {
  console.log('Application is listening on 9000');
});



app.post('/hotels', function (req, res) {
	console.log("post req")
	request('https://offersvc.expedia.com/offers/v2/getOffers?scenario=deal-finder&page=foo&uid=foo&productType=Hotel', function (error, response, body) {
	  console.log('error:', error); // Print the error if one occurred
	  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
	  console.log('body:', JSON.parse(jsonminify(body)).offers.Hotel); // Print the HTML for the Google homepage.
	});

});
