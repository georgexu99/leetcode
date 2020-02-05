let romanToInteger = function (romanNumeral) {
    let VAL_MAP = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    let result = 0;
    for (let i = romanNumeral.length - 1; i >= 0; i--) {
        if (i < romanNumeral.length - 1 && VAL_MAP[romanNumeral[i]] < VAL_MAP[romanNumeral[i+1]]) {
            result -= VAL_MAP[romanNumeral[i]];
        } else {
            result += VAL_MAP[romanNumeral[i]];
        }
    }
    return result;
};

console.log(romanToInteger('III'));
console.log(romanToInteger('IV'));
console.log(romanToInteger('IX'));
console.log(romanToInteger('LVIII'));