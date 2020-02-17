const twoSum = (arr, target) => {
    const VAL_MAP = {};
    for (let i = 0; i < arr.length; i++) {
        let diff = target - arr[i];
        if (VAL_MAP[diff] !== undefined) {
            return [VAL_MAP[diff], i];
        } else {
            VAL_MAP[arr[i]] = i;
        }
    }
}

const nums = [2, 7, 11, 15];
console.log(twoSum(nums, 9));