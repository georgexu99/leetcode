const plusOne = digits => {
    let carry = 1;
    for (let i = digits.length - 1; i > 0; i--) {
        if (digits[i] === 9 && carry === 1) {
            digits[i] = 0;
        } else {
            digits[i] += 1; 
            carry = 0;
        }
    }

    if (carry === 1 && digits[0] === 9) {
        digits[0] = 0;
        digits.unshift(1);
    }

    return digits;
}

console.log(plusOne([0]));
console.log(plusOne([1,2,3]));
console.log(plusOne([1,2,9]));
console.log(plusOne([9]));
console.log(plusOne([9,9,9]));