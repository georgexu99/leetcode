class TreeNode {
    constructor(value) {
      this.value = value;
      this.left;
      this.right;
    }
}

var sortedArrayToBST = function(nums) {
    function recurse(left, right) {// Inclusive
        if (left > right) {
            return null;
        }
        let middle = parseInt((left + right)/2);
        let node = new TreeNode(nums[middle]);
        node.left = recurse(left, middle - 1);
        node.right = recurse(middle + 1, right);
        return node;
    }
    return recurse(0, nums.length - 1);
};

const arr1 = [-10, -5, 0, 5, 10];
console.log(sortedArrayToBST(arr1));