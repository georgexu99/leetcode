/**
 * @param {string} s
 * @return {number}
 */
// this is only slightly better than brute-force but i wanted to work on dynamic programming!
var lengthOfLongestSubstring = function(s) {
    let max = 0;
    let arr = {};
    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < s.length; j++) {
            if (!arr[i]) {
                arr[i] = [];
            }

            if (!arr[i][j]) {
                arr[i][j] = 0;
            }

            if (i === j) {
                arr[i][j] = 1;
            } else {
                if (s.substring(i, j).includes(s[j])) {
                    break;
                } else {
                    arr[i][j] = arr[i][j-1] + 1;
                }
            }
            
            if (arr[i][j] > max) {
                max = arr[i][j];
            }
        }
    }
    return max;
};
