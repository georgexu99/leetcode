const missingNumber = (arr) => {
    let VAL_SET = new Set();
    for (let i = 0; i < arr.length; i++) {
        VAL_SET.add(arr[i]);
    }
    for (let j = 0; j < arr.length; j++) {
        if (!VAL_SET.has(j)) {
            return j;
        }
    } return  -1;
}

const arr1 = [3,0,1];
const arr2 = [9,6,4,2,3,5,7,0,1];
console.log(missingNumber(arr1));
console.log(missingNumber(arr2));