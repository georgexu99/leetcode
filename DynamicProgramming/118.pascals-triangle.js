// Example
// Input: 5
// Output:
// [
//      [1],
//     [1,1],
//    [1,2,1],
//   [1,3,3,1],
//  [1,4,6,4,1]
// ]

const pascal = (n) => {
    if (n < 1) {
        return [];
    }
    let pt = [[1]];
    for (let i = 1; i < n; i++) {
        let row = [];
        let prev = pt[i-1];
        for (let j = 0; j <= prev.length; j++) {
            if (j === 0 || j === prev.length) {
                row.push(1);
            } else {
                row.push(prev[j - 1] + prev[j]);
            }
        }
        pt.push(row);
    } return pt;
}

console.log(pascal(5));
console.log(pascal(10));
