var chai = require('chai');
var chaiHttp = require('chai-http');
var assert = require('chai').assert;
var app = require('../app');
var should = chai.should();
var expect = require('chai').expect;
var destination = require('../controllers/destinations');

var expectedKeys = [
	"Carriers",
	"Currencies",
	"Places",
	"Quotes",
	"InboundLeg",
	"OutboundLeg",
	"DepartureDate",
	"MinPrice",
	"DestinationId",
	"OriginId",
	"CarrierIds"
]

chai.use(chaiHttp);

describe('Wanderer app test', function(){
	it('Should display list of flights available', function(done){
		this.timeout(1000);
		chai.request(app)
			.get('/')
			.end(function(err,res){
				res.should.have.status(200);
				done();
			})
	})

	describe('testing /destination/:searchTerm', function(){
		it('should display list of flights for the search country', function(done){
			this.timeout(1000);
			chai.request(app)
			.get('/api/destination/' + 'ph')
			.end(function(err,res){
				res.should.have.status(200);
				done();
			})
		})

		it('should contain objects', function(done){
			this.timeout(1000);
			chai.request(app)
			.get('/api/destination/' + 'ph')
			.end(function(err,res){
				expect(res).to.be.an('object');
				expect(res.body).to.have.any.keys(expectedKeys);
				done();
			})
		});
	});
});
// //Results
// var sayHelloResult = app.sayHello();
// var addNumberResult = app.addNumbers(5,5);

// describe('testing wanderer', function(){
// 	describe('sayHello()', function(){
// 		it('app should return hello', function(){
// 			assert.equal(sayHelloResult, 'hello');
// 		});

// 		it('sayHello should return type string', function(){
// 			assert.typeOf(sayHelloResult, 'string');
// 		});
// 	});

// 	describe('addNumbers()',function(){
// 		it('addNumbers should be above 5', function(){
// 			assert.isAbove(addNumberResult, 5);
// 		});

// 		it('addNumbers should return typpe number', function(){
// 			assert.typeOf(addNumberResult, 'number');
// 		});
// 	});
// });