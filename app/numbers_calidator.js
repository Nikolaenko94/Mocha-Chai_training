/* eslint-disable linebreak-style */
/**
 *
 * A simple class containing for validators numbers
 * @class NumbersValidator
 */
class NumbersValidator {
  /**
     * Creates an instance of NumbersValidator.
     * @memberof NumbersValidator
     */
  constructor() {
  };

  /**
   *
   *
   * @param {Number} number number too check
   * @return {Boolean} true if number is even
   * @memberof NumbersValidator
   */
  isNumberEven(number) {
    const typeOfVariable = typeof number;
    if (typeOfVariable !== 'number') {
      // eslint-disable-next-line max-len
      throw new Error(`[${number} is not of type Number, it is of type "${typeOfVariable}"]`);
    } else {
      return number % 2 === 0;
    }
  };

  /**
   *
   *
   * @param {Array<Numbers>} arrayOfNumbers array of Numbers to go throght
   * @return {Array<Numbers>} array of even numbers
   * @memberof NumbersValidator
   */
  getEvenNumbersFromArray(arrayOfNumbers) {
    if (Array.isArray(arrayOfNumbers) &&
    arrayOfNumbers.every((item) => typeof item === 'number')) {
      const arrayOfEvenNumbers = arrayOfNumbers.filter(this.isNumberEven);
      return arrayOfEvenNumbers;
    } else {
      throw new Error(`[${arrayOfNumbers} is not an array of "Numbers"]`);
    }
  }
}

module.exports = NumbersValidator;
