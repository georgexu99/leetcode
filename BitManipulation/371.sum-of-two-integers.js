let sumOfTwoIntegers = (int1, int2) => {
    let sum;
    let carry;
    while (carry != 0) {
        carry = int1 & int2;
        sum = int1 ^ int2;
        int1 = carry << 1;
        int2 = sum;
    }
    return sum;
}

console.log(sumOfTwoIntegers(1, 1));
console.log(sumOfTwoIntegers(111, 211));
console.log(sumOfTwoIntegers(1, 2));
console.log(sumOfTwoIntegers(2, 1));