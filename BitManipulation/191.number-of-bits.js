const hammingWeight = (unsignedInt) => {
    let result = 0;
    while (unsignedInt != 0) {
        result += (1 & unsignedInt);
        unsignedInt = unsignedInt >>> 1;
    }
    return result;
}

console.log(hammingWeight(0000000000000001));
console.log(hammingWeight(0000000011000001));
console.log(hammingWeight(1111111111111111));
console.log(hammingWeight(0000000000000000));