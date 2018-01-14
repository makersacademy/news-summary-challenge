var expect = require('Chai').expect;
var request = require('request');

var server = require('../server.js');

describe('server response', function () {
  before(function () {
    server.listen(8080);
  });

  after(function () {
    server.close();
  });

  it('should return 200', function (done) {
    request.get('http://localhost:8080/help', function (err, res, body) {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });


});
