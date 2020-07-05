var plusOne = function(digits) {
    let carry = 1;
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] === 9 && carry === 1) {
            digits[i] = 0;
        } else {
            digits[i] += carry;
            carry = 0;
        }
    }
    if (carry === 1) { digits.unshift(1);}
    return digits;
};
