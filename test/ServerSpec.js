var expect = require('chai').expect;
var request = require('request');
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server/index');
let should = chai.should();
var assert = require('chai').assert


chai.use(chaiHttp);

describe('/GET /', () => {
    // tests for main page 
    it('it should have status 200', (done) => {
        chai.request(server)
            .get('/')
            .end((err, res) => {
                expect(res).to.have.status(200);
                done();
            });
    });
    it('it should not respond with error', (done) => {
        chai.request(server)
            .get('/')
            .end((err, res) => {
                expect(err).to.not.exist;
                done();
            });
    });

    //  tests for the API when we send a request to /data/hotels
    it('it should have status 200', (done) => {
        chai.request(server)
            .get('/data/hotels')
            .end((err, res) => {
                expect(res).to.have.status(200);
                done();
            });
    });
    it('it should respond with a list', (done) => {
        chai.request(server)
            .get('/data/hotels')
            .end((err, res) => {
                expect(JSON.parse(res.text)).to.be.an('array');
                done();
            });
    });    
    it('it should respond with a list of 5 hotels', (done) => {
        chai.request(server)
            .get('/data/hotels')
            .end((err, res) => {
                expect(JSON.parse(res.text)).to.have.lengthOf(5);
                done();
            });
    });

    // these tests are for the properties of the hotel 
    it('the hotel should have property hotelName', (done) => {
        chai.request(server)
            .get('/data/hotels')
            .end((err, res) => {
                done();
            });
    });  
    it('the hotel should have property hotelCity', (done) => {
        chai.request(server)
            .get('/data/hotels')
            .end((err, res) => {
                done();
            });
    });
    it('the hotel should have property hotelStarRating', (done) => {
        chai.request(server)
            .get('/data/hotels')
            .end((err, res) => {
                done();
            });
    });  
    it('the hotel should have property hotelGuestReviewRating', (done) => {
        chai.request(server)
            .get('/data/hotels')
            .end((err, res) => {
                done();
            });
    });  
    it('the hotel should have property hotelReviewTotal', (done) => {
        chai.request(server)
            .get('/data/hotels')
            .end((err, res) => {
                done();
            });
    });
    it('the hotel should have property hotelImageUrl', (done) => {
        chai.request(server)
            .get('/data/hotels')
            .end((err, res) => {
                done();
            });
    });             
});


