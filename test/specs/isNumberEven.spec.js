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
      //expect(validator.isNumberEven(4)).to.be.true;
      expect(validator.isNumberEven(4)).to.be.equal(true);
  });
  it(`should return false if number is odd`, function() {
    //expect(validator.isNumberEven(5)).to.be.false;  
    expect(validator.isNumberEven(5)).to.be.equal(false);
  });
  it(`chai test`, function() {
    expect(5).to.equal(5);
    expect(5).to.below(54);// <
    expect(5).to.above(2);// >
    expect({a:"aple",b:43}).to.have.property("a");
    expect({a:"apple",b:43}).to.have.property("a","apple");
    expect({a:"apple",b:43}).to.be.eql({a:"apple",b:43});
    expect([1,2,'12']).to.have.lengthOf(3);
  });
});
