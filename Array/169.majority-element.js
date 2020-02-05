// single pass
let majorityElement = function(array) {
    // voter system, worst case O(n) but average case also O(n)
    let counter = 1;
    let prev = null;
    for (let num of array) {
        if (num === prev) {
            counter++;
        } else {
            if (counter > 1) {
                counter--;
            } else {
                prev = num;
            }
        }
    } 
    return prev;
};

let arr = [1,3,3,2,1,1,1,1,3,2];
let arr2 = [1,2,2,3,4,5,5,5,5,5,3,5,5,5,5];
console.log(majorityElement(arr));
console.log(majorityElement(arr2));