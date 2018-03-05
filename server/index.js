const express = require('express')
const app = express();
module.exports = app;
const request = require('request');
var bodyParser = require('body-parser');
var jsonminify = require("jsonminify");
var rp = require('request-promise');
var cors = require('cors');

// Parse JSON (uniform resource locators)
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/../client')); 
app.use('/node_modules', express.static(__dirname + '/../node_modules'));
app.use('/slick', express.static(__dirname + '/../slick'));
var path = require('path');

app.listen(9000, function() {
    console.log('Application is listening on 9000');
});

// this code sends a call to Expedia's API if it succeeds the data will be send to front end 
var hotels;
app.get('/data/hotels', function(req, res) {
    var options = {
        uri: 'https://offersvc.expedia.com/offers/v2/getOffers?scenario=deal-finder&page=foo&uid=foo&productType=Hotel',
        json: true
    };

    rp(options)
        .then(function(body) {
            hotels = JSON.stringify(body.offers.Hotel);

            res.send(hotels);
        })
        .catch(function(err) {
            console.log("An Error Occured: ", err);
        });
});

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname + '/../client/main.html'));
})

// this function was written for debugging 
function isJson(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}