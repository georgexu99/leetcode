const containsDuplicate = (array) => {
    let VAL_MAP = {};
    for(let num of array) {
        if (VAL_MAP[num]) {
            return true;
        } else {
            VAL_MAP[num] = 1;
        }
    } return false;
}




const arr1 = [1,2,3,1];
const arr2 = [1,2,3,4];
const arr3 = [1,1,1,3,3,4,3,2,4,2];
console.log(containsDuplicate(arr1));
console.log(containsDuplicate(arr2));
console.log(containsDuplicate(arr3));
