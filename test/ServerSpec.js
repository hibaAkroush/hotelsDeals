var expect = require('chai').expect;
var request = require('request');
var app = require('../server/index.js');
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();

chai.use(chaiHttp);

describe('/GET', () => {
  it('it should have status 200', (done) => {
        chai.request(server)
        .get('/')
        .end((err, res) => {
            res.should.have.status(200);
            res.body.length.should.be.eql(0);
          done();
        });
  });
});

describe('/POST hotels', () => {
  it('it should ', (done) => {
    let hotel = {
        destinationCity: "paris",
        minTripStartDate: "2017-04-03",
        maxTripStartDate: "2017-05-03",
        lengthOfStay: 10,
        maxStarRating: 5,
        maxTotalRate: 5,
        maxGuestRating: 5,
        minStarRating: 2,
        minTotalRate: 2,
        minGuestRating: 2
    }
        chai.request(server)
        .post('/hotels')
        .send(hotel)
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.book.should.have.property('destinationCity');
            res.body.book.should.have.property('minTripStartDate');
            res.body.book.should.have.property('maxTripStartDate');
            res.body.book.should.have.property('lengthOfStay');
            res.body.book.should.have.property('maxStarRating');
            res.body.book.should.have.property('maxGuestRating');
            res.body.book.should.have.property('maxTotalRate');
            res.body.book.should.have.property('minStarRating');
            res.body.book.should.have.property('minGuestRating');
            res.body.book.should.have.property('minTotalRate');
            done();
        });
  });
});
