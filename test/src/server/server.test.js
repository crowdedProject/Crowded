const { expect } = require('chai');
const request = require('supertest-as-promised');
const app = require('../../../src/server/config/server-config');

describe("the server", function() {
  it.only('should server index.html', function(done) {
    request(app).get('/')
    .then(response => {
      expect(response.status).to.equal(200);
      done();
    })
    .catch(done);
  });
});