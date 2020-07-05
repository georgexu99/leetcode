// [0] returns [0]
// [1] returns [0, 1]
// [2] returns [0, 1, 1]
// [3] returns [0, 1, 1, 2]
// [4] returns [0, 1, 1, 2, 1];
// [5] returns [0, 1, 1, 2, 1, 2]
// [6] returns [0, 1, 1, 2, 1, 2, 2]
// [7] returns [0, 1, 1, 2, 1, 2, 2, 3]

const countingBits = (num) => {
    let result = new Array(num + 1).fill(0);

    if (num == 0) {
        return result;
    }

    let bit = 1;

    for (let i = 1; i <= num; i++) {
        if (i == bit * 2) { bit *= 2 }

        result[i] = result[i - bit] + 1;
    }
    return result;
}