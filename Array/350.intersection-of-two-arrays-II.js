const intersection = (arr1, arr2) => {
    let VAL_MAP = {};
    let result = [];
    for (let i = 0; i < arr1.length; i++) {
        VAL_MAP[arr1[i]] = (VAL_MAP[arr1[i]] || 0) + 1;
    }

    for (let j = 0; j < arr2.length; j++) {
        if (VAL_MAP[arr2[j]]) {
            VAL_MAP[arr2[j]]--;
            result.push(arr2[j]);
        }
    }
    return result;
}

let arr1 = [1,2,2,1];
let arr2 = [1,2,3];
console.log(intersection(arr1, arr2));