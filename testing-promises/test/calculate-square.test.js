import calculateSquare from '../src/calculate-square.js';
import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
chai.use(chaiAsPromised);
const {expect} = chai;

describe('calculateSquare', () => {
  it('should resolve with number 4 if passed number 2', () => {
    // return statement signals asynchronous test completion and
    // the .eventually object is part of the syntax
    // for testing an asynchronous function
    return expect(calculateSquare(2)).to.eventually.be.equal(4);
  });

  it('should become fulfilled when passed number 2', () => {
    return expect(calculateSquare(2)).to.be.fulfilled;
  });

  // 2nd parameter passed into the it() function below
  // is a way to test asynchronous functions
  // without using the return keyword
  it('should become rejected if passed a string instead of a number', (done) => {
    expect(calculateSquare('string')).to.be.rejected.notify(done);
  });
});