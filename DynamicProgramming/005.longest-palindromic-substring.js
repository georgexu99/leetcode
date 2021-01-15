/**
 * @param {string} s
 * @return {string}
 */
let longestPalindrome = function(s) {
    if (s == null || s.length < 1) return s;
    
    let start = 0;
    let end = 0;

    for (let i=0; i < s.length; i++) {
        let len1 = expandFromMiddle(s, i, i);
        let len2 = expandFromMiddle(s, i, i+1);
        let len = Math.max(len1, len2);
        if (len > end - start) {
            start = i - ((len -1) / 2);
            end = i + (len / 2);
        }
    }

    return s.substring(Math.round(start), end + 1);
}

let expandFromMiddle = function (s, i, j) {
    if (s == null || i > j) return 0;

    while(i >= 0 && j < s.length && s[i] === s[j]) {
        i--;
        j++;
    }
    return j - i - 1;
}


console.log(longestPalindrome("cbbd"));
console.log("hi");