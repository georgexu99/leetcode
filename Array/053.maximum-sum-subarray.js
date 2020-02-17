const maxSumSubArray = (arr) => {
    let maxSum = arr[0];
    let currSum = arr[0];

    for (let i = 1; i < arr.length; i++) {
        currSum = Math.max(arr[i], arr[i] + arr[i + 1]);
        maxSum = Math.max(currSum, maxSum);
    }
    return maxSum;
}

var maxSubArray = function(nums) {
    return recurse(0, nums.length - 1);
    
    function recurse(left, right){
        if(left > right){ return -Infinity; }
        
        const mid = parseInt((left + right)/2);
        
        const lMax = recurse(left, mid - 1);
        const rMax = recurse(mid + 1, right);
        
        let ml = 0;
        let mr = 0;
        
        for(let i = mid - 1, sum = 0; i >= left; i--){
            sum += nums[i];
            ml = Math.max(ml, sum);
        }
        
        for(let i = mid + 1, sum = 0; i <= right; i++){
            sum += nums[i];
            mr = Math.max(mr, sum);
        }
        
        const crossMax = nums[mid] + ml + mr;
        return Math.max(lMax, rMax, crossMax);
    }
};


const arr1 = [-2,1,-3,4,-1,2,1,-5,4];
console.log(maxSubArray(arr1));