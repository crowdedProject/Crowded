const { expect } = require('chai');
const request = require('supertest-as-promised');
const app = require('../../../src/server/config/server-config');

describe("the server", function() {
  it('should server index.html', function(done) {
    request(app).get('/')
    .then(response => {
      expect(response.status).to.equal(200);
      expect(response.type).to.match(/html/);
      done();
    })
    .catch(done);
  });
});