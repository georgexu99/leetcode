const uniqueCharacter = (s) => {
    let VAL_MAP = {};
    for (let i = 0; i < s.length; i++) {
        if (!VAL_MAP[s[i]]) {
            VAL_MAP[s[i]] = 1;
        } else {
            VAL_MAP[s[i]]++;
        }
    }

    for (let j = 0; j < s.length; j++) {
        if (VAL_MAP[s[j]] === 1) {
            return j;
        }
    }
    return -1;
}

console.log(uniqueCharacter('leetcode'));
console.log(uniqueCharacter('loveleetcode'));
console.log(uniqueCharacter('eee'));