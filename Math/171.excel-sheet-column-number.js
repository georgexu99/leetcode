const valueOfChar = (char) => {
    return char.charCodeAt() - 64;
};

const calculateColumnNumber = (s) => {
    const base = 26;
    let result = exponent = 0;
    for (let i = s.length -1; i >= 0; i--) {
        result += Math.pow(base, exponent) * valueOfChar(s[i]);
        exponent++;
    }
    return result;
}

console.log(calculateColumnNumber('A'));
console.log(calculateColumnNumber('AB'));
console.log(calculateColumnNumber('ZY'));
