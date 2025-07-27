/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] + 1 !== 10) {
            digits[i] += 1;
            return digits;
        }
        digits[i] = 0;
    }

    let newDigits = new Array(digits.length + 1).fill(0);
    newDigits[0] = 1;
    return newDigits;
};
