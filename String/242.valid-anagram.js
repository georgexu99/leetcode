const validAnagram = (s, s2) => {
    let VAL_MAP = {};
    if (s.length !== s2.length) {
        return false;
    } else if (s.length === 0) {
        return true;
    }

    for (let i = 0; i < s.length; i++) {
        (VAL_MAP[s[i]]) ? VAL_MAP[s[i]] += 1 : VAL_MAP[s[i]] = 1;
    }

    for (let i = 0; i < s2.length; i++) {
        (!VAL_MAP[s2[i]]) ? false : VAL_MAP[s2[i]] -= 1;
    }

    for (let key of Object.keys(VAL_MAP)) {
        if (VAL_MAP[key] !== 0) {
            return false;
        }
        return true;
    }
};

console.log(validAnagram('anagram', 'nagaram'));
console.log(validAnagram('cat', 'fat'));