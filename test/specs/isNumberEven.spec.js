const NumbersValidator = require('../../app/numbers_calidator');
const {expect} = require('chai');

describe('isNumberEven positive scenarios', function() {
  let validator;
  beforeEach(function() {
    validator = new NumbersValidator();
  });
  afterEach(function() {
    validator = null;
  });
  it(`should return true if number is even`, function() {
      expect(validator.isNumberEven(4)).to.be.equal(true);
  });
});
