import calculateSquare from '../calculate-square.js';
import pkg from 'chai';
const {expect} = pkg;

describe('calculateSquare', function() {
  it('should return 4 if passed 2', function() {
    calculateSquare(2, function(error, result) {
      expect(result).to.equal(4);
    });
  });
});